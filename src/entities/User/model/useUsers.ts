import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import { useUserStore } from "./store";
import { useEffect } from "react";

export function useUsers() {
  const setUsers = useUserStore((state) => state.setUsers);

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  return {
    isLoading,
  };
}
