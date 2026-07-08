import type { EditTodoDTO } from "#entities/Todo/model/types";
import { useUsers } from "#entities/User/model/useUsers";
import UserDropdown from "#features/UserDropdown";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEffect } from "react";
import { useEditEntity } from "../model/useEditEntity";
import "../style.scss"
import { useUserStore } from "#entities/User/model/store";

export function EditTodoModal({ editData }: { editData: EditTodoDTO }) {
    const setUsers = useUserStore(state => state.setUsers)
    const { data, isError } = useUsers();

    useEffect(() => {
        if (data) {
            setUsers(data);
        }
    }, [data, isError])
    const close = useModalStore(state => state.close)
    const { formData, handleChange, handleSubmit, errors, handleChangeSelect } = useEditEntity(editData);

    return (
        <form className="form editModal" onSubmit={handleSubmit}>
            <div className="form__item">
                <label className="form__label" htmlFor="title">Название задачи</label>
                <input 
                    className="form__input" 
                    onChange={handleChange} 
                    type="text" 
                    name="title"
                    id="title"
                    value={formData.title} 
                />
                <span 
                    className={
                        `form__error 
                        ${errors.title ? 'form__error--visible' : ''}`
                    }>
                    { errors.title }
                </span>
            </div>
            <div className="form__item">
                <UserDropdown
                    onChange={handleChangeSelect}
                    choosenUserId={formData.userId}
                />
            </div>

            <div className="form__controls">
                <button className="form__submit" onClick={close}>Отменить</button>
                <button className="form__submit" type="submit">Сохранить</button>
            </div>
        </form>
    )
}
