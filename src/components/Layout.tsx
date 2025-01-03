import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
    <div className="grid grid-cols-layout lg:grid-cols-layout-lg  md:grid-cols-layout-md sm:grid-cols-layout-sm  min-h-screen">
        <Sidebar />
        <main className="flex-grow">
            <Outlet/>
        </main>
    
    </div> 
    );
}
 
export default Layout;