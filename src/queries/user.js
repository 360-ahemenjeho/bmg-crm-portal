import { api } from "@/lib/api";
import { buildQuery, useFilters } from "@/lib/filter";
import { useRequest } from "@/lib/request";
import { useQuery } from "@tanstack/react-query";

const INIT_FILTERS = { fromDate: "", toDate: "" };

export function useGetAdmins() {
  const { request } = useRequest();
  const f = useFilters(INIT_FILTERS);
  const { isPending: loading, data } = useQuery({
    queryKey: ["admins", f.params],
    queryFn: request(async function () {
      const qs = buildQuery(f.params);
      const response = await api.get(`/get_admins${qs}`);
      const responseData = response.data;

      console.log("Admins Response");
      console.log(responseData);

      if (responseData?.success && responseData?.data) {
        f.setTotalPages(responseData?.pagination?.total_pages ?? 0);
        return responseData.data;
      }

      return [];
    }),
  });

  return {
    loading,
    data,

    totalPages: f.totalPages,
    page: f.page,
    filters: f.filters,
    search: f.search,
    hasActiveFilters: f.hasActiveFilters,

    setFilter: f.setFilter,
    setSearch: f.setSearch,

    applyFilters: f.applyFilters,
    applySearch: f.applySearch,
    clearSearch: f.clearSearch,
    goToPage: f.goToPage,
    reset: f.reset,
  };
}
