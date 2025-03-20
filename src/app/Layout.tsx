import Navbar from "../lib/components/Navbar";
import Footer from "../lib/components/Footer";
import {Outlet, useLocation} from "react-router-dom";
import {Suspense, useEffect} from "react";
import {AnimatePresence} from "framer-motion";

function Layout() {
    const { pathname } = useLocation();
    const LoadingFallback = () => <div className="loading-spinner">Loading...</div>;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <>
            <Navbar />
            <Suspense fallback={<LoadingFallback />}>
                <AnimatePresence mode="wait">
                    <Outlet key={pathname} />
                </AnimatePresence>
                <Footer />
            </Suspense>
        </>

    );
}

export default Layout;
