import { useTodos } from "./useQuery";

export function useTodoGallery() {
  const { isLoading } = useTodos();

  return {
    isLoading,
  };
}
