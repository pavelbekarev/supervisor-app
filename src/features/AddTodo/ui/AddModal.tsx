import { todoFormConfig } from "#entities/Todo";
import { useUserStore } from "#entities/User/model/store";
import { useUsers } from "#entities/User/model/useUsers";
import CustomDropdown from "#shared/ui/CustomDropdown";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useState } from "react";
import { useAddTodo } from "../model/useAddTodo";
import type { User } from "#entities/User";

export function AddTodoModal() {
    useUsers();
    const users = useUserStore(state => state.users);
    const close = useModalStore(state => state.close);
    const { handleChange, handleSubmit } = useAddTodo();

    const [choosenUser, setChoosenUser] = useState<User | null>(null);

    return (
        <form onSubmit={handleSubmit} className="form addModal">
            {
                todoFormConfig.map((item, index) => (
                    <div className="form__item" key={index}>
                        <label className="form__label" htmlFor={item.name}>{ item.label }</label>
                        <input onChange={handleChange} className="form__input" type={item.type} id={item.name} name={item.name} />
                    </div>
                ))
            }
            <div className="form__item">
                {/* <label className="form__label" htmlFor="users">Выберите человека</label>
                <select className="form__input" name="users" id="users">
                    {
                        users.map((item) => (
                            <option className="form__input" value={item.id}>{ item.name }</option>
                        ))
                    }
                </select> */}
                <CustomDropdown<User> options={users} onChange={setChoosenUser} value={choosenUser} getLabel={(user) => user.name} />
            </div>

            <div className="form__controls addModal__controls">
                <button onClick={close} className="form__submit">Отменить</button>
                <button type="submit" className="form__submit">Добавить</button>
            </div>
        </form>
    )
}