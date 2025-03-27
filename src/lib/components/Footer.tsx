import {Link} from "react-router-dom";
import LRSlogo from "../../assets/logo/final-logo.png";
import {motion} from "framer-motion";
import BookBtn from "./BookBtn";
import Whatsapp from "../../assets/icons/whatsapp.svg";
import Youtube from "../../assets/icons/youtube.svg";
import Instagram from "../../assets/icons/instagram.svg";
import Facebook from "../../assets/icons/facebook.svg";

export default function Footer() {

    return (
        <div className="flex flex-col bg-black space-y-8 px-[30px] md:px-[100px] xl:px-[150px] py-12">
            <div className="flex flex-row justify-between place-items-center">
                <p className="text-4xl font-bold">We are here to help.</p>
                <Link to={"/"} className="cursor-pointer pl-3">
                    <img src={LRSlogo} alt="LRS Logo" width="50" height="30" />
                </Link>
            </div>
            <BookBtn innerHTML={"Contact Us"} href={"/contact"} />
            <div className="flex flex-col space-y-2 font-light text-sm">
                <a href="tel:+447539282657">07539 282657</a>
                <a href="mailto:liam@lrsexteriorcleaning.com" className="underline">liam@lrsexteriorcleaning.com</a>
                <div className="opacity-80 text-xs">
                    <p>Ramsey Road</p>
                    <p>Dovercourt</p>
                    <p>Harwich, CO12 4RJ</p>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="flex flex-col">
                    <p className="mb-2 font-medium">The Company</p>
                    <div className="flex flex-col opacity-80 space-y-1">
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
                    </div>

                </div>
                <div className="flex flex-col">
                    <p className="mb-2 font-medium">Services</p>
                    <div className="flex flex-col opacity-80 space-y-1">
                        <Link to={"/services/windowcleaning"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">window cleaning</motion.button>
                        </Link>
                        <Link to={"/services/guttercleaning"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">gutter cleaning</motion.button>
                        </Link>
                        <Link to={"/services/pressurewashing"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">pressure washing</motion.button>
                        </Link>
                        <Link to={"/services/roofcleaning"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">roof cleaning</motion.button>
                        </Link>
                        <Link to={"/services/upvc&conservatory"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">upvc & conservatory</motion.button>
                        </Link>
                        <Link to={"/services/rendercleaning"}>
                            <motion.button
                                whileHover={{color: "#3D8BC3"}}
                                whileTap={{scale: 0.9}}
                                transition={{ duration: 0.1 }}
                                className="">render cleaning</motion.button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-row flex-wrap place-items-center gap-4 opacity-80">
                <a href={"https://www.facebook.com/people/LRS-Exterior-Cleaning/100093042117110/"}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center min-w-[40px] min-h-[40px] aspect-square bg-white/20 border border-[#132C4F]/[0.04] rounded-[20px]"
                    >
                        <img src={Facebook} className="w-4" alt="Facebook" />
                    </motion.div>
                </a>
                <a href={"https://www.instagram.com/lrsexteriorcleaning"}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center min-w-[40px] min-h-[40px] aspect-square bg-white/20 border border-[#132C4F]/[0.04] rounded-[20px]"
                    >
                        <img src={Instagram} className="w-4" alt="Instagram" />
                    </motion.div>
                </a>
                <a href={"https://api.whatsapp.com/send/?phone=07539282657&text&type=phone_number&app_absent=0"}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center min-w-[40px] min-h-[40px] aspect-square bg-white/20 border border-[#132C4F]/[0.04] rounded-[20px]"
                    >
                        <img src={Whatsapp} className="w-4" alt="Whatsapp" />
                    </motion.div>
                </a>
                <a href={"https://youtube.com/@LRSExteriorCleaning?si=qk7ohj1fYXky9pL8"}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex justify-center items-center min-w-[40px] min-h-[40px] aspect-square bg-white/20 border border-[#132C4F]/[0.04] rounded-[20px]"
                    >
                        <img src={Youtube} className="w-4" alt="Youtube" />
                    </motion.div>
                </a>
            </div>
            <div className="flex flex-row justify-start bg-black">
                <p className="font-light text-xs opacity-60">Copyright © 2024 LRS Exterior</p>
            </div>
        </div>
    )
}