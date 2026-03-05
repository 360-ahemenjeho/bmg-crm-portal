import { api } from "@/lib/api";
import { useRequest } from "@/lib/request";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const qc = useQueryClient();
  const { request } = useRequest();

  return useMutation({
    mutationFn: request(async function (/**@type {Record<String, string>}*/ data) {
      const response = await api.post("/auth/login", data);
      console.log("Login Response ");
      console.log(response);
      // return response;
    }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}
