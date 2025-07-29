import {motion} from "framer-motion";
import LRSlogo from "../../assets/logo/final-logo.png";
import Hamburger from "../../assets/icons/hamburger.svg";
import Frame from "../../assets/icons/frame.svg";
import Health from "../../assets/icons/health.svg";
import Eco from "../../assets/icons/eco.svg";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";
import {useState} from "react";
import { Link } from "react-router-dom";

export default function MobileNavbar() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }

    // Navigation menu variants
    const navVariants = {
        closed: {
            height: "55px",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        },
        open: {
            height: "100vh",
            transition: {
                duration: 0.5,
                ease: "easeInOut"
            }
        }
    };

    // Menu content variants for staggered animation
    const menuContentVariants = {
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                duration: 0.3
            }
        },
        open: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2
            }
        }
    };

    return (
        <motion.div
            initial="closed"
            animate={isNavOpen ? "open" : "closed"}
            variants={navVariants}
            className="fixed w-full max-w-[1280px] overflow-hidden backdrop-blur-[15px] bg-white/20 z-50"
        >
            <div className="w-full h-full flex flex-col py-[12.5px] px-[30px] md:px-[80px] bg-[#060D13]/80">
                <div className="w-full flex flex-row justify-between items-center">
                    <Link to={"/"}>
                        <img src={LRSlogo} className="cursor-pointer" alt="LRS Logo" width="50" height="30" />
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.2 }}
                        onClick={() => setIsNavOpen(!isNavOpen)}
                        className="z-10 flex items-center justify-center bg-transparent outline-none focus:outline-none"
                    >
                        <svg width="24" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.line
                                x1="2" y1="3" x2="22" y2="3"
                                stroke="white" strokeWidth="2"
                                strokeLinecap="round"
                                animate={{
                                    rotate: isNavOpen ? 45 : 0,
                                    y: isNavOpen ? 6 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.line
                                x1="2" y1="15" x2="22" y2="15"
                                stroke="white" strokeWidth="2"
                                strokeLinecap="round"
                                animate={{
                                    rotate: isNavOpen ? -45 : 0,
                                    y: isNavOpen ? -6 : 0
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </svg>
                    </motion.button>
                </div>

                <motion.div
                    className="flex flex-col h-full justify-between"
                    variants={menuContentVariants}
                    initial="closed"
                    animate={isNavOpen ? "open" : "closed"}
                >
                    <nav className="flex flex-col place-items-start font-bold text-4xl mt-8 space-y-6 text-white">
                        <Link to={"/services"}>
                            <motion.a
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">services</motion.a>
                        </Link>
                        <Link to={"/whylrs"}>
                            <motion.a
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">why LRS</motion.a>
                        </Link>
                        <Link to={"/contact"}>
                            <motion.a
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">contact us</motion.a>
                        </Link>
                    </nav>
                    <div className="flex flex-row gap-2">
                        <p className="text-[#FFFFFFDE]">your house is our frame</p>
                        <img src={Frame} width="15" height="15" alt="" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-[#FFFFFFDE]">let us revive your home</p>
                        <img src={Health} width="15" height="15" alt="" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <p className="text-[#FFFFFFDE]">we are eco friendly</p>
                        <img src={Eco} width="15" height="15" alt="" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <a href={"https://api.whatsapp.com/send/?phone=07539282657&text&type=phone_number&app_absent=0"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Whatsapp} width="36" alt="" />
                            </motion.div>
                        </a>
                        <a href={"https://youtube.com/@LRSExteriorCleaning?si=qk7ohj1fYXky9pL8"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Youtube} width="36" alt="" />
                            </motion.div>
                        </a>
                        <a href={"https://www.instagram.com/lrsexteriorcleaning"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Instagram} width="36" alt="" />
                            </motion.div>
                        </a>
                        <a href={"https://www.facebook.com/people/LRS-Exterior-Cleaning/100093042117110/"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Facebook} width="36" alt="" />
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}