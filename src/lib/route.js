import { namedRoutes, publicRoutes } from "@/lib/constants";
import { matchPath, useLocation } from "react-router-dom";

/**
 * @typedef {(typeof namedRoutes)[keyof typeof namedRoutes]} RouteName
 */

/**
 * @param {string} pathname
 * @returns {RouteName | null}
 */
function getCurrentRouteName(pathname) {
  for (const [pattern, routeName] of Object.entries(namedRoutes)) {
    const match = matchPath(pattern, pathname);
    if (match) {
      return /** @type {RouteName} */ (routeName);
    }
  }
  return null;
}

/**
 * @returns {{ getCurrentRouteName: () => RouteName | null, isCurrentRoute: (routeNames: RouteName[]) => boolean }}
 */
export function useCurrentRoute() {
  const { pathname } = useLocation();

  /**
   * @param {RouteName[]} routeNames
   * @returns {boolean}
   */
  function isCurrentRoute(routeNames) {
    const currentRouteName = getCurrentRouteName(pathname);
    return currentRouteName ? routeNames.includes(currentRouteName) : false;
  }

  return {
    getCurrentRouteName: () => getCurrentRouteName(pathname),
    isCurrentRoute,
  };
}

export const useCheckPublicRoute = () => {
  const location = useLocation();
  const currPath = location.pathname;
  const isPublic = publicRoutes.some((route) => matchPath({ path: route, end: true }, currPath));
  return isPublic;
};
