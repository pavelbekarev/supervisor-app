import { todoFormConfig } from "#entities/Todo";
import { useUsers } from "#entities/User/model/useUsers";
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useAddTodo } from "../model/useAddTodo";
import UserDropdown from "#features/UserDropdown";

export function AddTodoModal() {
    useUsers();
    
    const close = useModalStore(state => state.close);
    const { formData, handleChange, handleSubmit, handleChangeSelect } = useAddTodo();

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
                <UserDropdown
                    choosenUserId={formData.userId}
                    onChange={handleChangeSelect}
                />
            </div>

            <div className="form__controls addModal__controls">
                <button onClick={close} className="form__submit">Отменить</button>
                <button type="submit" className="form__submit">Добавить</button>
            </div>
        </form>
    )
}