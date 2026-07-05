import { todoFormConfig, type Todo } from "#entities/Todo"
import { useEditEntity } from "../model/useEditEntity";
import "../style.scss"

export function EditModal<T>({ editData }: { editData: T }) {
    const { formData, handleChange, handleSubmit } = useEditEntity(editData as Todo);

    return (
        <form className="form editModal" onSubmit={handleSubmit}>
            {
                todoFormConfig.map((item, index) => (
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
                ))
            }

            <button className="form__submit" type="submit">Сохранить</button>
        </form>
    )
}
