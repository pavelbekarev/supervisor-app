import type { Todo } from "#entities/Todo";
import { useModalStore } from "#shared/ui/Modal/model/store";
import "../style.scss"

export function DeleteButtonIcon({ data }: {data: Todo}) {
    const open = useModalStore((state) => state.open);

    return (
        <button aria-label="Кнопка удаления записи" className="button deleteButton" onClick={() => open("deleteTodo", data)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
        </button>
    )
}

