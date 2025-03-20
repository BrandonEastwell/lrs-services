import Navbar from "../lib/components/Navbar";
import Footer from "../lib/components/Footer";
import {Outlet, useLocation} from "react-router-dom";
import {Suspense, useEffect, useTransition} from "react";
import {AnimatePresence} from "framer-motion";
import LoadingBar from "../lib/components/LoadingBar";

function Layout() {
    const [isLoading, setIsLoading] = useTransition();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(() => {})
    }, [pathname]);

    return (
        <>
            <Navbar />
            <LoadingBar isLoading={isLoading} />
            <Suspense fallback={<LoadingBar isLoading={true} />}>
                <AnimatePresence mode="wait">
                    <Outlet key={pathname} />
                </AnimatePresence>
            </Suspense>
            <Footer />
        </>
    );
}

export default Layout;
