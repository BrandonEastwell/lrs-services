import {motion} from "framer-motion";
import LRSlogo from "../../assets/logo/final-logo.png";
import { Link } from "react-router-dom";
import Whatsapp from "../../assets/icons/whatsapp.svg";

export default function DesktopNavbar({ isDesktop } : { isDesktop : boolean }) {
    return (
        <div
            className="fixed w-full h-full max-h-[55px] max-w-[1920px] overflow-hidden backdrop-blur-[15px] bg-white/20 z-50"
        >
            <div className="w-full h-full py-[12.5px] px-[30px] md:px-[100px] xl:px-[150px] bg-[#060D13]/80">
                <div className="w-full flex flex-row justify-between items-center">
                    <nav className="flex flex-row place-items-start font-bold text-xl space-x-6 text-white">
                        <Link to={"/"}>
                            <img src={LRSlogo} className="cursor-pointer" alt="LRS Logo" width="50" height="30" />
                        </Link>
                        <Link to={"/services"}>
                            <motion.a
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="ml-10 text-[#FFFFFF]">services</motion.a>
                        </Link>
                        <Link to={"/whylrs"}>
                            <motion.a
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="text-[#FFFFFF]">why LRS</motion.a>
                        </Link>
                        <Link to={"/contact"}>
                            <motion.a
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="text-[#FFFFFF]">contact us</motion.a>
                        </Link>
                    </nav>
                    { isDesktop && (
                        <div className="flex flex-row gap-2 font-bold text-xl text-white">
                            <a href="https://api.whatsapp.com/send/?phone=07539282657&text&type=phone_number&app_absent=0" className="place-self-center">
                                <img src={Whatsapp} alt="WhatsApp" width="18" height="18"/>
                            </a>
                            <a href="tel:+447539282657 text-[#FFFFFF]">07539282657</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}