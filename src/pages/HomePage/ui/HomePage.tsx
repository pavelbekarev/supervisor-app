import { useAuthorizatedUser } from "#entities/User/model/store";
import "../style.scss";

export function HomePage() {
    const user = useAuthorizatedUser((state) => state.user)

    if (!user) {
        return;
    }
    
    return (
        <>
            <span>{ user.email || 'фывЫ' }</span>
        </>
    )
}