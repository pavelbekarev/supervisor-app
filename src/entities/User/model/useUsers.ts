import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import { useUserStore } from "./store";
import { useEffect } from "react";
import type { User } from "./types";

export function useUsers() {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers,
    retry: false,
  });

  const setUsers = useUserStore((state) => state.setUsers);

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, isError, setUsers]);

  return {
    isLoading,
    data,
    isError,
  };
}
