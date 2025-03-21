import {motion} from "framer-motion";
import LRSlogo from "../../assets/logo/final-logo.png";
import { Link } from "react-router-dom";

export default function DesktopNavbar() {
    return (
        <div
            className="fixed w-full h-full max-h-[55px] max-w-[1280px] overflow-hidden backdrop-blur-[15px] bg-white/20 z-50"
        >
            <div className="w-full h-full flex flex-col py-[12.5px] px-[30px] md:px-[80px] bg-[#060D13]/80">
                <div className="w-full flex flex-row justify-between items-center">
                    <Link to={"/"}>
                        <img src={LRSlogo} className="cursor-pointer" alt="LRS Logo" width="50" height="30" />
                    </Link>
                    <nav className="flex flex-row place-items-start font-bold text-xl space-x-6 text-white">
                        <Link to={"/services"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">services</motion.button>
                        </Link>
                        <Link to={"/whylrs"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">why LRS</motion.button>
                        </Link>
                        <Link to={"/contact"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">contact us</motion.button>
                        </Link>
                        <Link to={"/locations"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">locations</motion.button>
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}