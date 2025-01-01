import { ReactNode } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (!isAuthenticated) {
        navigate("/");
    }
    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute;