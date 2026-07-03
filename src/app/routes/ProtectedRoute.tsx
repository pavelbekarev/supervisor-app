import { useAuthorizatedUser } from "#entities/User/model/store";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
    const user = useAuthorizatedUser((state) => state.user);

    if (!user) {
        return <Navigate to={"/login"} replace />
    }

    return <Outlet />
}