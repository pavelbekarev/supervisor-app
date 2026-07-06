import { useState } from "react"
import "../style.scss"

interface Props<T> {
    options: T[],
    value: T | null,
    onChange: (value: T) => void,
    getLabel: (value: T) => string,
}

export function CustomDropdown<T>(props: Props<T>) {
    const { onChange, options, value, getLabel } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleDropdown = () => {
        setIsOpen(prev => !prev)
    }
    const handleChange = (item: T) => {
        onChange(item);
        setIsOpen(prev => !prev)
    }

    return (
        <div className="customDropdown">
            <div onClick={() => toggleDropdown()} className="customDropdown__valueBar">{ value ? getLabel(value) : "Выберите пользователя" }</div>
            <ul className={`customDropdown__options ${isOpen ? 'customDropdown__options--opened' : ''}`}>
                {
                    options.map((item, index) => (
                        <li onClick={() => handleChange(item)} key={index} className="customDropdown__item">{ getLabel(item) }</li>
                    ))
                }
            </ul>
        </div>
    )
}
