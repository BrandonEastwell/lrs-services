import Cooperate from "../assets/cooperate.png";
import Calendar from "../assets/calendar.svg";
import {useState} from "react";
import ServiceCard from "../lib/components/ServiceCard";
import Postcode from "../lib/components/Postcode";
import {services} from "../lib/utils/services";
import QuoteForm from "../lib/components/QuoteForm";
import Navbar from "../lib/components/Navbar";
import ReviewsCarousel from "../lib/components/ReviewsCarousel";

function App() {
    const [openService, setOpenService] = useState<string | null>(null);

    return (
        <>
            <Navbar />
            <div className="bg-[url('../assets/pressure.png')] w-full h-screen bg-right bg-cover pt-[100px] px-[30px] z-10">
                <div className="flex flex-col place-items-center space-y-7">
                    <h1 className="text-center text-6xl mix-blend-plus-lighter opacity-85">Your home is our canvas.</h1>
                    <h2 className="text-center text-2xl font-bold text-[#3D8BC3] mix-blend-plus-lighter">make your home new again</h2>
                    <button className="bg-[#3D8BC3] border-[1px_solid_rgba(61,139,195,0.04)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">Book appointment</button>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] px-[30px] py-20">
                <div className="flex flex-col space-y-4">
                    <h1 className="text-center text-5xl mix-blend-plus-lighter opacity-85 mb-12">our services</h1>
                    {services.map((service) => (
                        <ServiceCard key={service.id} id={service.id} name={service.name} number={service.number}
                                     description={service.description} image={service.image} openService={openService}
                                     setOpenService={() => setOpenService(service.id)} />
                    ))}
                </div>
                <Postcode />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#080C10] px-[30px] py-20">
                <div className="flex flex-col">
                    <h1 className="text-center text-5xl">
                        Let’s get your <span className="text-[#ECA133]">free</span> quote
                    </h1>
                    <p className="text-center opacity-70 font-light my-7">Are you ready to get the shiniest house on the block? I bring exceptional shine and cleanliness to your property at an affordable rate.</p>
                    <div className="grid grid-cols-[1fr_2fr] p-4">
                        <img className="rounded-full" src={Cooperate} alt=""/>
                        <div className="flex flex-col justify-center">
                            <p className="text-2xl">Liam Sanderson</p>
                            <p className="text-xs">Founder & Specialist Exterior Detailer</p>
                        </div>
                    </div>
                    <QuoteForm />
                    <p className="text-center text-white/70 font-normal">Want to contact us directly? <span className="text-[#80D3EE]/100 underline">Give us a call.</span></p>
                </div>
                <div className="flex flex-col gap-4 mt-12">
                    <p className="text-center text-white text-5xl font-semibold">what's next?</p>
                    <div className="grid grid-rows-[2fr_1fr_1fr] px-8 py-12 place-items-center rounded-[20px] rounded-br-[0px] bg-gradient-to-b from-[#000000] to-[#060B11] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                        <img src={Calendar} alt="" width="48" height="48"/>
                        <p className="text-center text-2xl font-semibold">prompt response</p>
                        <p className="text-center font-light opacity-80">We aim to get back to you within 2 business days</p>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] pb-20 pt-20">
                <ReviewsCarousel />
            </div>
        </>
    );
}

export default App;
