import "../style.scss"
import { useEffect, useRef } from "react";
import { useModalStore } from "../model/store"
import { DeleteModal } from "#features/DeleteEntity/ui/DeleteModal";
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
                type === 'editTodo' && data &&
                <EditTodoModal editData={data} />
            }
            {
                type === 'deleteTodo' && data &&
                <DeleteModal data={data} />
            }
            {
                type === 'addTodo' && 
                <AddTodoModal />
            }

            <button className="modal__close" onClick={close}>X</button>
        </dialog>
    )
}