import type { EditTodoDTO } from "#entities/Todo/model/types";
import { useDeleteEntity } from "../model/useDeleteEntity";
import "../style.scss"

export function DeleteModal({ data }: { data: EditTodoDTO }) {
    const { handleDecline, handleDelete } = useDeleteEntity();

    return (
        <div className="deleteModal">
            <span className="deleteModal__title">Вы действительно хотите удалить задачу?</span>
            <div className="deleteModal__controls">
                <button className="deleteModal__button" onClick={() => handleDelete(data)}>Да</button>
                <button className="deleteModal__button" onClick={handleDecline}>Нет</button>
            </div>
        </div>
    )
}