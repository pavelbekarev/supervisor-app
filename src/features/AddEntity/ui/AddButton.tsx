import { useModalStore } from "#shared/ui/Modal/model/store"
import "../style.scss"

export function AddButton() {
    const open = useModalStore(state => state.open)

    return (
        <button className="addButton button" onClick={() => open('addTodo')}>
            Добавить новую запись
        </button>
    )
}