import { useAuthorization } from "../model/useAuthorization"
import "../style.scss"

export function AuthorizationForm() {
    const { formData, handleChange,handleSubmit, isLoading } = useAuthorization();

    return (
        <form onSubmit={handleSubmit} className="authorizationForm form">
            <div className="form__item">
                <label className="form__label" htmlFor="email">Введите email</label>
                <input onChange={handleChange} required className="form__input" type="text" name="email" id="email" placeholder="example@mail.ru" />
            </div>

            <div className="form__item">
                <label className="form__label" htmlFor="password">Введите пароль</label>
                <input onChange={handleChange} required className="form__input" type="text" name="password" id="password" placeholder="Пароль" />
            </div>

            <button className="form__submit" type="submit" disabled={isLoading}>Авторизоваться</button>
        </form>
    )
}
