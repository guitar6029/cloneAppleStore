import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
    <div className="grid grid-cols-layout  md:grid-cols-layout-md sm:grid-cols-layout-sm  xs:grid-cols-layout-xs min-h-screen">
        <Sidebar />
        <main className="flex-grow">
            <Outlet/>
        </main>
    
    </div> 
    );
}
 
export default Layout;