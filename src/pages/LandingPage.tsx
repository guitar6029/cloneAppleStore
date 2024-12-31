import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( <>
        <h1>E STORE</h1>
        <Link to="/login"><button>Login</button></Link>
    </> );
}
 
export default LandingPage;