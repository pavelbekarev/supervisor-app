import type { Todo } from "#entities/Todo";
import { useModalStore } from "#shared/ui/Modal/model/store";

export function DeleteButton({ data }: {data: Todo}) {
    const open = useModalStore((state) => state.open);

    return (
        <button className="button deleteButton" onClick={() => open("deleteTodo", data)}>
            Удалить
        </button>
    )
}
