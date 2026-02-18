import { useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { apiReq } from "@/constants/config";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearUser } from "@/store/slices/userSlice";

/**
 * @typedef {Object} RequestOptions
 * @property {boolean} [abort=true]
 * @property {string} [pin]
 * @property {boolean} [logoutOnExpiry]
 * @property {boolean} [redirectOnUnauth]
 * @property {(error: unknown) => unknown} [onError]
 * @property {() => void} [onFinally]
 * @property {boolean} [rethrow]
 */

/**
 * @template {(...args: any[]) => Promise<any>} T
 * @typedef {((...args: Parameters<T>) => Promise<Awaited<ReturnType<T>> | undefined>) & { abort: () => void }} WrappedFn
 */

/**
 * @typedef {Object} UseRequestReturn
 * @property {<T extends (...args: any[]) => Promise<any>>(fn: T, options?: RequestOptions) => WrappedFn<T>} request
 * @property {() => void} abortAll
 * @property {() => void} cleanup
 */

/**
 * @returns {UseRequestReturn}
 */
export const useRequest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /** @type {React.RefObject<Map<string, AbortController>>} */
  const controllersRef = useRef(new Map());

  const createWrapper = useCallback(
    /**
     * @template {(...args: any[]) => Promise<any>} T
     * @param {T} fn
     * @param {RequestOptions} [options]
     * @returns {WrappedFn<T>}
     */
    (fn, options = { abort: true }) => {
      /** @type {number | null} */
      let interceptorId = null;

      /** @type {AbortController | null} */
      let controller = null;

      const wrapped = async (/** @type {Parameters<T>} */ ...args) => {
        const requestId = Math.random().toString(36);

        if (options.abort) {
          controller = new AbortController();
          controllersRef.current.set(requestId, controller);
        }

        if (options.pin) {
          interceptorId = apiReq.interceptors.request.use(
            (/** @type {Record<any, any>} */ config) => {
              config.headers = {
                ...config.headers,
                "Account-Password": options.pin,
              };
              return config;
            },
          );
        }

        try {
          const enhancedArgs = options.abort ? [...args, { signal: controller?.signal }] : args;

          const result = await fn(...enhancedArgs);
          return result;
        } catch (/** @type {any} */ error) {
          console.error("api error -> ");
          console.log(error);

          const errMsg = Array.isArray(error?.response?.data?.message)
            ? error?.response?.data?.message[0]
            : error?.response?.data?.message;
          if (error?.code === "ERR_NETWORK") {
            toast.info("Connection error, please try again!");
            return;
          }

          if (error?.name === "AbortError") {
            toast.error("Request was aborted or timed out.");
            return;
          }

          const status = error?.response?.status;
          if (status === 401) {
            toast.error("Session expired. Please login again.");

            if (options.logoutOnExpiry !== false) {
              dispatch(clearUser());
            }

            if (options.redirectOnUnauth !== false) {
              dispatch(clearUser());
              navigate("/login", { replace: true });
            }
            return;
          }

          if (status === 403) {
            toast.error(errMsg || "Access denied.");
            return;
          }

          const method = error?.config?.method?.toUpperCase?.();
          if (options.onError) {
            const errorResult = options.onError(error);
            if (errorResult !== undefined) {
              return errorResult;
            }
          } else if (method !== "GET") {
            toast.error(errMsg || "Technical error! Please try again.");
          } else {
            console.error(error);
          }

          if (options.rethrow) throw error;
        } finally {
          if (interceptorId !== null) {
            apiReq.interceptors.request.eject(interceptorId);
          }

          if (controller) {
            controllersRef.current.delete(requestId);
          }

          if (options.onFinally) options.onFinally();
        }
      };

      return Object.assign(wrapped, {
        abort: () => controller?.abort(),
      });
    },
    [navigate, dispatch],
  );

  const abortAll = useCallback(() => {
    controllersRef.current.forEach((controller) => controller.abort());
    controllersRef.current.clear();
  }, []);

  const cleanup = useCallback(() => {
    abortAll();
  }, [abortAll]);

  return {
    request: createWrapper,
    abortAll,
    cleanup,
  };
};
