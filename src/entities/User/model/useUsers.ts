import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../api/getUsers";
import { useUserStore } from "./store";
import { useEffect } from "react";
import { usersMock } from "./mock";

export function useUsers() {
  const setUsers = useUserStore((state) => state.setUsers);

  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  useEffect(() => {
    setTimeout(() => {
      if (data) {
        setUsers(data);
      } else {
        setUsers(usersMock);
      }
    }, 5000);
  }, [data, setUsers]);

  return {
    isLoading,
  };
}
