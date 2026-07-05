import { useState } from "react";

export function usePagination<T>(items: T[], pageSize: number) {
  const [page, setPage] = useState<number>(1);

  const pagesCount = Math.ceil(items.length / pageSize);

  const currentItems = items.slice((page - 1) * pageSize, page * pageSize);

  return {
    currentItems,
    pagesCount,
    page,
    setPage,
  };
}
