import type { Todo } from "#entities/Todo";
import { DeleteButtonIcon } from "#features/DeleteEntity/ui/DeleteButtonIcon";
import { EditButtonIcon } from "#features/EditTodo/ui/EditButtonIcon";
import "../style.scss"
import { useUserStore } from "#entities/User/model/store";

export function TodoCard({ todo }: { todo: Todo }) {
    const user = useUserStore(state => state.users.find((user) => user.id === todo.userId))

    return (
        <div className={`todoCard ${todo.completed ? 'todoCard--done' : ''}`}>
            <p className="todoCard__title">{ todo.title }</p>
            <p className="todoCard__text">Пользователь: { user?.name }</p>
            <div className="todoCard__controls">
                {
                    !todo?.completed &&  
                    <EditButtonIcon data={todo}  />
                }
                <DeleteButtonIcon data={todo} />
            </div>
        </div>
    )
}
