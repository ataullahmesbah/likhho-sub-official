import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {


    const noHeaderFooter = location.pathname.includes('dashboard') || location.pathname.includes('editor') || location.pathname.includes('updateProfile') || location.pathname.includes('room/:roomID') || location.pathname.includes('doc')
    
    const noFooter = location.pathname.includes('dashboard')||location.pathname.includes('editor')||location.pathname.includes('updateProfile') || location.pathname.includes('room/:roomID') || location.pathname.includes('doc')

    return (
        <div>
           { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noFooter || <Footer></Footer>}
        </div>
    );
};

export default MainLayout;
