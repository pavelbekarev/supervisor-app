import { useModalStore } from "#shared/ui/Modal/model/store"

export function EditButton<T>({ data }: { data: T }) {
    const open = useModalStore((state) => state.open);

    return (
        <button onClick={() => open("editTodo", data)}>
            Редактировать
        </button>
    )
}
