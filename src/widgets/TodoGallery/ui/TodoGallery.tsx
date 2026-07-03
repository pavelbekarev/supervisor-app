import type { Todo } from "#entities/Todo";
import TodoCard from "#features/TodoCard"
import { useTodos } from "../model/useQuery";
import "../style.scss"

export function TodoGallery() {
    const { data } = useTodos();

    return (
        <div className="todoGallery">
            {
                data?.sort((a, b) => Number(b.completed) - Number(a.completed)).map((item: Todo) => (
                    <TodoCard
                        key={item.id}
                        todo={item}
                    />
                ))
            }
        </div>
    )
}
