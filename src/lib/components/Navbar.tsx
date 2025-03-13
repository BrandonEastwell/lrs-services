import {motion} from "framer-motion";
import LRSlogo from "../../assets/logo/final-logo.png";
import Hamburger from "../../assets/hamburger.svg";
import Frame from "../../assets/frame.svg";
import Health from "../../assets/health.svg";
import Eco from "../../assets/eco.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Youtube from "../../assets/youtube.svg";
import Instagram from "../../assets/instagram.svg";
import Facebook from "../../assets/facebook.svg";
import {useState} from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
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
            className="fixed w-full overflow-hidden backdrop-blur-[15px] bg-white/20 z-50"
        >
            <div className="w-full h-full flex flex-col py-[12.5px] px-[30px] bg-[#060D13]/80">
                <div className="w-full flex flex-row justify-between items-center">
                    <Link to={"/"}>
                        <img src={LRSlogo} className="cursor-pointer" alt="LRS Logo" width="50" height="30" />
                    </Link>
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 1.2}}
                        onClick={toggleNav} className="z-10">
                        <img src={Hamburger} alt="Menu" width="18" height="6" />
                    </motion.button>
                </div>

                {/* Menu content */}
                <motion.div
                    className="flex flex-col h-full justify-between"
                    variants={menuContentVariants}
                    initial="closed"
                    animate={isNavOpen ? "open" : "closed"}
                >
                    <nav className="flex flex-col place-items-start font-bold text-4xl mt-8 space-y-6 text-white">
                        <Link to={"services"}>
                            <motion.button
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">services</motion.button>
                        </Link>
                        <Link to={"whyLRS"}>
                            <motion.button
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">why LRS</motion.button>
                        </Link>
                        <Link to={"contact"}>
                            <motion.button
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">contact us</motion.button>
                        </Link>
                        <Link to={"locations"}>
                            <motion.button
                                onClick={toggleNav}
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">locations</motion.button>
                        </Link>
                    </nav>
                    <div className="flex flex-row gap-2">
                        <p>your house is our frame</p>
                        <img src={Frame} width="15" height="15" alt="" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>let us revive your home</p>
                        <img src={Health} width="15" height="15" alt="" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <p>we are eco friendly</p>
                        <img src={Eco} width="15" height="15" alt="" />
                    </div>
                    <div className="flex flex-row justify-between">
                        <a href={""}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Whatsapp} width="36" height="36" alt="" />
                            </motion.div>
                        </a>
                        <a href={"https://youtube.com/@LRSExteriorCleaning?si=qk7ohj1fYXky9pL8"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Youtube} width="36" height="36" alt="" />
                            </motion.div>
                        </a>
                        <a href={"https://www.instagram.com/l.cexteriorcleaning/"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Instagram} width="36" height="36" alt="" />
                            </motion.div>
                        </a>
                        <a href={"https://www.facebook.com/people/LRS-Exterior-Cleaning/100093042117110/"}>
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}
                                className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Facebook} width="36" height="36" alt="" />
                            </motion.div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}