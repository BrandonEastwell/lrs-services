import {motion} from "framer-motion";
import LRSlogo from "../assets/final-logo.png";
import Hamburger from "../assets/hamburger.svg";
import Eco from "../assets/eco.svg";
import Facebook from "../assets/facebook.svg";
import Frame from "../assets/frame.svg";
import Health from "../assets/health.svg";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Youtube from "../assets/youtube.svg";
import Map from "../assets/map.svg";
import { useState } from "react";
import PressureWashing from "../assets/pressure-washing.png";
import Location from "../assets/location.svg";
import ServiceCard from "../lib/components/ServiceCard";
import CheckYourPostcode from "../lib/components/CheckYourPostcode";

function App() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [openService, setOpenService] = useState<string | null>(null);

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

    // Services data
    const services = [
        {
            id: "window-cleaning",
            name: "Window Cleaning",
            number: "01",
            image: PressureWashing,
            description: "Our professional window cleaning service removes dirt, grime, and water spots, leaving your windows crystal clear."
        },
        {
            id: "gutter-cleaning",
            name: "Gutter Cleaning",
            number: "02",
            image: PressureWashing,
            description: "Keep your gutters flowing freely with our thorough gutter cleaning service."
        },
        {
            id: "pressure-washing",
            name: "Pressure Washing",
            number: "03",
            image: PressureWashing,
            description: "Revitalize your property with our expert pressure washing services. We use advanced equipment and eco-friendly solutions for a deep, lasting clean. We perform under pressure."
        },
        {
            id: "roof-cleaning",
            name: "Roof Cleaning",
            number: "04",
            image: PressureWashing,
            description: "Revitalize your property with our expert pressure washing services. We use advanced equipment and eco-friendly solutions for a deep, lasting clean. We perform under pressure."
        },
        {
            id: "upvc-conservatory",
            name: "UPVC & Conservatory",
            number: "05",
            image: PressureWashing,
            description: "Revitalize your property with our expert pressure washing services. We use advanced equipment and eco-friendly solutions for a deep, lasting clean. We perform under pressure."
        },
        {
            id: "render-cleaning",
            name: "Render Cleaning",
            number: "06",
            image: PressureWashing,
            description: "Revitalize your property with our expert pressure washing services. We use advanced equipment and eco-friendly solutions for a deep, lasting clean. We perform under pressure."
        }
    ];

    return (
        <>
            <motion.div
                initial="closed"
                animate={isNavOpen ? "open" : "closed"}
                variants={navVariants}
                className="fixed w-full overflow-hidden backdrop-blur-[15px] bg-white bg-opacity-20 z-50"
            >
                <div className="w-full h-full flex flex-col py-[12.5px] px-[30px] bg-[#060D13] bg-opacity-80">
                    <div className="justify-self-start flex justify-between items-center flex-row w-full">
                        <img src={LRSlogo} alt="LRS Logo" width="50" height="30" />
                        <button onClick={toggleNav} className="z-10">
                            <img src={Hamburger} alt="Menu" width="18" height="6" />
                        </button>
                    </div>

                    {/* Menu content */}
                    <motion.div
                        className="flex flex-col h-full justify-between"
                        variants={menuContentVariants}
                        initial="closed"
                        animate={isNavOpen ? "open" : "closed"}
                    >
                        <nav className="flex flex-col font-bold text-4xl mt-8 space-y-6 text-white">
                            <a href="#" className="">services</a>
                            <a href="#" className="">why LRS</a>
                            <a href="#" className="">contact us</a>
                            <a href="#" className="">locations</a>
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
                            <div className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Whatsapp} width="36" height="36" alt="" />
                            </div>
                            <div className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Youtube} width="36" height="36" alt="" />
                            </div>
                            <div className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Instagram} width="36" height="36" alt="" />
                            </div>
                            <div className="w-[64px] h-[64px] place-content-center place-items-center bg-white/6 border border-[#132C4F]/[0.04] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)] rounded-[20px]">
                                <img src={Facebook} width="36" height="36" alt="" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            <div className="bg-[url('../assets/pressure.png')] w-full h-screen bg-right bg-cover pt-[100px] px-[30px] z-10">
                <div className="flex flex-col place-items-center space-y-7">
                    <h1 className="text-center text-6xl mix-blend-plus-lighter opacity-85">Your home is our canvas.</h1>
                    <h2 className="text-center text-2xl font-bold text-[#3D8BC3] mix-blend-plus-lighter">make your home new again</h2>
                    <button className="bg-[#3D8BC3] border-[1px_solid_rgba(61,139,195,0.04)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">Book appointment</button>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] px-[30px] pb-20">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-center text-5xl mix-blend-plus-lighter opacity-85 pt-12 mb-12">our services</h1>
                    {services.map((service) => (
                        <ServiceCard key={service.id} id={service.id} name={service.name} number={service.number}
                                     description={service.description} image={service.image} openService={openService}
                                     setOpenService={() => setOpenService(service.id)} />
                    ))}
                </div>
                <CheckYourPostcode />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#080C10] px-[30px] pb-20">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-center text-5xl opacity-85 pt-12 mb-6">Lets get your <h1 className="text-[#ECA133]">free</h1> quote</h1>
                    <p className="text-center opacity-80 font-normal">Are you ready to get the shiniest house on the block? I bring exceptional shine and cleanliness to your property at an affordable rate.</p>
                    <div>

                    </div>
                    <form className="flex flex-col">
                        <input type="text" />
                        <input type="email" />
                        <input type="number" />
                        <select>
                            <option></option>
                        </select>
                        <input type="text" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
