import { useAuthorizatedUser } from "#entities/User/model/store";
import Header from "#widgets/Header";
import TodoGallery from "#widgets/TodoGallery";
import "../style.scss";

export function HomePage() {
    const user = useAuthorizatedUser((state) => state.user)

    if (!user) {
        return;
    }
    
    return (
        <>
            <Header />
            <TodoGallery />
        </>
    )
}