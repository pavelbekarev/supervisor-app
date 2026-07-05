import type { Todo } from "#entities/Todo";
import { useTodoList } from "#entities/Todo/model/store";
import TodoCard from "#features/TodoCard"
import { useTodos } from "../model/useQuery";
import "../style.scss"

export function TodoGallery() {
    useTodos();
    const todos = useTodoList(state => state.todos)

    return (
        <div className="todoGallery">
            {
                todos?.sort((a, b) => Number(b.completed) - Number(a.completed)).map((item: Todo) => (
                    <TodoCard
                        key={item.id}
                        todo={item}
                    />
                ))
            }
        </div>
    )
}
