import { useAuth0 } from "@auth0/auth0-react";

const Login : React.FC = () => {

    const { loginWithRedirect } = useAuth0();
    return ( 
            <div className="h-min-screen flex flex-col ">
                    <span>Login</span>
                    <button onClick={() => loginWithRedirect()}>Log In</button>
            </div>
     );
}
 
export default Login;