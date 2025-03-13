import Navbar from "../lib/components/Navbar";
import Footer from "../lib/components/Footer";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
