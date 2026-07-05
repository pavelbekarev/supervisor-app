import { useQuery } from "@tanstack/react-query";
import { loadTodos } from "../api/loadTodos";
import { useTodoList } from "#entities/Todo/model/store";
import { useEffect } from "react";
import { todoMock } from "#entities/Todo";

export function useTodos() {
  const setTodos = useTodoList((state) => state.setTodos);
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: loadTodos,
  });

  /**
   * Очень долго загружаются данные с внешнего API,
   * поэтому сделал таймаут. Если данные успеют загрузиться - в состояние попадут данные с API.
   * Иначе в состояние запишутся мокированные данные (они совпадают с данными с внешнего API)
   */
  useEffect(() => {
    setTimeout(() => {
      if (data) {
        setTodos(data)
      } else {
        setTodos(todoMock)
      }
    }, 5000)
  }, [data, setTodos])

  return { isLoading };
}
