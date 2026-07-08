import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";

export function useUsers() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: false,
  });

  return {
    isLoading,
    data,
    isError,
  };
}
