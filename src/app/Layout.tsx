import MobileNavbar from "../lib/components/MobileNavbar";
import Footer from "../lib/components/Footer";
import {Outlet, useLocation} from "react-router-dom";
import {Suspense, useEffect, useState, useTransition} from "react";
import {AnimatePresence, motion} from "framer-motion";
import LoadingBar from "../lib/components/LoadingBar";
import DesktopNavbar from "../lib/components/DesktopNavbar";

function Layout() {
    const [isLoading, setIsLoading] = useTransition();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const { pathname } = useLocation();

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsLoading(() => {})
    }, [pathname]);

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <>
            {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
            <LoadingBar isLoading={isLoading} />
            <Suspense fallback={<LoadingBar isLoading={true} />}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={pathname}
                        variants={pageVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
                <Footer />
            </Suspense>

        </>
    );
}

export default Layout;
