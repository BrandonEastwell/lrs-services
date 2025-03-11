import {motion} from "framer-motion";
import LRSlogo from "../assets/logo/final-logo.png";
import Hamburger from "../assets/hamburger.svg";
import Eco from "../assets/eco.svg";
import Facebook from "../assets/facebook.svg";
import Frame from "../assets/frame.svg";
import Health from "../assets/health.svg";
import Instagram from "../assets/instagram.svg";
import Whatsapp from "../assets/whatsapp.svg";
import Youtube from "../assets/youtube.svg";
import Cooperate from "../assets/cooperate.png";
import Calendar from "../assets/calendar.svg";
import { useState } from "react";
import ServiceCard from "../lib/components/ServiceCard";
import CheckYourPostcode from "../lib/components/CheckYourPostcode";
import {services} from "../lib/utils/services";
import QuoteForm from "../lib/components/QuoteForm";

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
                <div className="flex flex-col space-y-7">
                    <h1 className="text-center text-5xl opacity-85 pt-12">
                        Let’s get your <span className="text-[#ECA133]">free</span> quote
                    </h1>
                    <p className="text-center opacity-80 font-normal">Are you ready to get the shiniest house on the block? I bring exceptional shine and cleanliness to your property at an affordable rate.</p>
                    <div className="grid grid-cols-[1fr_2fr] p-4">
                        <img className="rounded-full" src={Cooperate} alt=""/>
                        <div className="flex flex-col justify-center">
                            <p className="text-2xl">Liam Sanderson</p>
                            <p className="text-xs">Founder & Specialist Exterior Detailer</p>
                        </div>
                    </div>
                    <QuoteForm />
                    <p className="text-center text-white/70 font-normal">Want to contact us directly? <span className="text-[#80D3EE]/100 underline">Give us a call.</span></p>
                    <div className="flex flex-col gap-4 mt-8">
                        <p className="text-center text-white text-5xl font-semibold">what's next?</p>
                        <div className="grid grid-rows-[2fr_1fr_1fr] px-8 py-12 place-items-center rounded-[20px] rounded-br-[0px] bg-gradient-to-b from-[#000000] to-[#060B11] bg-opacity-60 border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                            <img src={Calendar} alt="" width="48" height="48"/>
                            <p className="text-center text-2xl font-semibold">prompt response</p>
                            <p className="text-center font-light opacity-80">We aim to get back to you within 2 business days</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
