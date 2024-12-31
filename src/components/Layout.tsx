import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
    <div className="grid grid-cols-layout min-h-screen col-3-span">
        <Sidebar />
        <main className="flex-grow">
            <Outlet/>
        </main>
    
    </div> 
    );
}
 
export default Layout;