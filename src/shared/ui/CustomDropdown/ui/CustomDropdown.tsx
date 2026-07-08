import { useState } from "react"
import "../style.scss"
import type { CustomDropdownProps, DropdownOption } from "../model/types";

export function CustomDropdown(props: CustomDropdownProps) {
    const { onChange, options, value, isLoading } = props;
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(prev => !prev)
    }
    
    const handleChange = (item: DropdownOption) => {
        onChange(item.id);
        setIsOpen(prev => !prev)
    }
    console.debug(isLoading)

    return (
        <div className="customDropdown">
            <button type="button" disabled={isLoading} onClick={() => toggleDropdown()} className="customDropdown__valueBar">{ value ? value.label : "Выберите значение" }</button>

            <ul className={`customDropdown__options ${isOpen ? 'customDropdown__options--opened' : ''}`}>
                {
                    options.map((item, index) => (
                        <li onClick={() => handleChange(item)} key={index} className="customDropdown__item">{ item.label }</li>
                    ))
                }
            </ul>
        </div>
    )
}
