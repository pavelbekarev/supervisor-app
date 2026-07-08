import { useAuthorizatedUser } from "#entities/User/model/store";
import { AddButton } from "#features/AddTodo";
import "../style.scss"

export function Header() {
    const user = useAuthorizatedUser(state => state.user)

    return (
        <header className="header">
            <h1>{user?.email}</h1>
            <AddButton />
        </header>
    )
}