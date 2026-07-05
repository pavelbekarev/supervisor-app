import type { Todo } from "#entities/Todo";
import DeleteButton from "#features/DeleteEntity";
import EditButton from "#features/EditEntity";
import "../style.scss"

export function TodoCard({ todo }: { todo: Todo }) {


    return (
        <div className={`todoCard ${todo.completed && 'todoCard--done'}`}>
            <p className="todoCard__title">{ todo.title }</p>
            <span className="todoCard__check">{ todo.completed }</span>
            {
                !todo.completed &&  
                <EditButton data={todo} /> 
            }
            <DeleteButton data={todo} />
        </div>
    )
}
