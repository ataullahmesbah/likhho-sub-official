import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../pages/shared/Footer";


const MainLayout = () => {


    const noHeaderFooter = location.pathname.includes('dashboard') || location.pathname.includes('editor')

    return (
        <div>
           { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;
