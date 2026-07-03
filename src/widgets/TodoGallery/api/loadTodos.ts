import { api } from "#shared/api/axiosInstance";

export async function loadTodos() {
  const { data } = await api.get("/todos");

  return data;
}
