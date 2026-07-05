import type { Todo } from "#entities/Todo";
import DeleteButton from "#features/DeleteEntity";
import { DeleteButtonIcon } from "#features/DeleteEntity/ui/DeleteButtonIcon";
import EditButton from "#features/EditEntity";
import { EditButtonIcon } from "#features/EditEntity/ui/EditButtonIcon";
import "../style.scss"

export function TodoCard({ todo }: { todo: Todo }) {


    return (
        <div className={`todoCard ${todo.completed && 'todoCard--done'}`}>
            <p className="todoCard__title">{ todo.title }</p>
            <span className="todoCard__check">{ todo.completed }</span>
            <div className="todoCard__controls">
                {
                    !todo.completed &&  
                    <EditButtonIcon data={todo}  />
                }
                <DeleteButtonIcon data={todo} />
            </div>
        </div>
    )
}
