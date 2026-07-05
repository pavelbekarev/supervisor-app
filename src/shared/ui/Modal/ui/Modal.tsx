import { EditModal } from "#features/EditEntity/ui/EditModal";
import { useEffect, useRef } from "react";
import { useModalStore } from "../model/store"
import "../style.scss"
import { DeleteModal } from "#features/DeleteEntity/ui/DeleteModal";
import type { Todo } from "#entities/Todo";
import { AddModal } from "#features/AddEntity";

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
                <EditModal editData={data} />
            }
            {
                type === 'deleteTodo' &&
                <DeleteModal data={data as Todo} />
            }
            {
                type === 'addTodo' && 
                <AddModal />
            }

            <button className="modal__close" onClick={close}>X</button>
        </dialog>
    )
}