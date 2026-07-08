import type { EditTodoDTO } from "#entities/Todo/model/types";
import { useModalStore } from "#shared/ui/Modal/model/store";
import "../style.scss"

export function EditButtonIcon({ data }: { data: EditTodoDTO }) {
    const open = useModalStore((state) => state.open);

    return (
        <button aria-label="Кнопка редактирования записи" className="button editButton" onClick={() => open("editTodo", data)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
        </button>
    )
}