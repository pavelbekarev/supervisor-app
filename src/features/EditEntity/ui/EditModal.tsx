import { todoFormConfig, type Todo } from "#entities/Todo"
import { useModalStore } from "#shared/ui/Modal/model/store";
import { useEditEntity } from "../model/useEditEntity";
import "../style.scss"

export function EditModal<T>({ editData }: { editData: T }) {
    const close = useModalStore(state => state.close)
    const { formData, handleChange, handleSubmit, errors } = useEditEntity(editData as Todo);

    return (
        <form className="form editModal" onSubmit={handleSubmit}>
            {
                todoFormConfig.map((item, index) => (
                    <>
                        <div className="form__item" key={index}>
                            <label className="form__label" htmlFor={item.name}>{item.label}</label>
                            <input 
                                className="form__input" 
                                onChange={handleChange} 
                                type={item.type} 
                                name={item.name} 
                                id={item.name} 
                                value={formData[item.name]} 
                            />
                        </div>
                        <span 
                            className={
                                `form__error 
                                ${errors[item.name] ? 'form__error--visible' : ''}`
                            }>
                            { errors[item.name] }
                        </span>
                    </>
                ))
            }

            <div className="form__controls">
                <button className="form__submit" onClick={close}>Отменить</button>
                <button className="form__submit" type="submit">Сохранить</button>
            </div>
        </form>
    )
}
