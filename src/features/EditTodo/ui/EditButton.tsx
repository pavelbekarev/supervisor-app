import { useModalStore } from "#shared/ui/Modal/model/store"
import "../style.scss"

export function EditButton<T>({ data }: { data: T }) {
    const open = useModalStore((state) => state.open);

    return (
        <button aria-label="Кнопка редактирования записи" className="button editButton" onClick={() => open("editTodo", data)}>
            Редактировать
        </button>
    )
}
