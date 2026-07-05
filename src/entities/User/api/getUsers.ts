import { api } from "#shared/api/axiosInstance";

export async function getUsers() {
  const { data } = await api.get("/users");
  return data;
}
