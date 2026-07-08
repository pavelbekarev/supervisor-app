import { useEffect, useRef } from "react";
import { useModalStore } from "../model/store"
import "../style.scss"
import { DeleteModal } from "#features/DeleteEntity/ui/DeleteModal";
import type { Todo } from "#entities/Todo";
import { AddTodoModal } from "#features/AddTodo";
import EditTodoModal from "#features/EditTodo";

export function Modal() {
    const { close, data, isOpen, type } = useModalStore();
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    if (!isOpen) return;

    return (
        <dialog ref={dialogRef} className="modal">
            {
                type === 'editTodo' &&
                <EditTodoModal editData={data} />
            }
            {
                type === 'deleteTodo' &&
                <DeleteModal data={data as Todo} />
            }
            {
                type === 'addTodo' && 
                <AddTodoModal />
            }

            <button className="modal__close" onClick={close}>X</button>
        </dialog>
    )
}