import Cooperate from "../../assets/icons/cooperate.png";
import QuoteForm from "./QuoteForm";
import Calendar from "../../assets/icons/calendar.svg";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence} from "framer-motion";

export default function QuoteSection() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const submittedRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (submittedRef.current && formSubmitted) {
            submittedRef.current.scrollIntoView({ behavior: "smooth" }); // ✅ Correct spelling
        }
    }, [formSubmitted]);

    return (
        <>
            <div className="flex flex-col place-items-center mt-10">
                <h1 className="text-center text-5xl md:text-6xl">
                    Let’s get your <span className="text-[#ECA133]">free</span> quote
                </h1>
                <p className="text-center opacity-80 font-light my-7 md:px-12 md:text-xl">Are you ready to get the shiniest house on the block? I bring exceptional shine and cleanliness to your property at an affordable rate.</p>
                <div className="flex flex-row justify-center p-4">
                    <img className="justify-self-end mr-4 rounded-full" src={Cooperate} alt=""/>
                    <div className="flex flex-col justify-center">
                        <p className="text-2xl md:text-3xl">Liam Sanderson</p>
                        <p className="text-xs md:text-sm">Founder & Specialist Exterior Detailer</p>
                    </div>
                </div>
                <QuoteForm formSubmitted={formSubmitted} setFormSubmitted={setFormSubmitted} />
                <p className="text-center text-white/70 font-normal">Want to contact us directly? <span className="text-[#80D3EE]/100 underline">Give us a call.</span></p>
            </div>
            {formSubmitted &&
                <AnimatePresence>
                    <div ref={submittedRef} className="w-full flex flex-col gap-4 mt-12 max-w-[550px] place-self-center">
                        <p className="text-center text-white text-5xl font-semibold">what's next?</p>
                        <div className="grid grid-rows-[2fr_1fr_1fr] px-8 py-12 place-items-center rounded-[20px] rounded-br-[0px] bg-gradient-to-b from-[#000000] to-[#060B11] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                            <img src={Calendar} alt="" width="48" height="48"/>
                            <p className="text-center text-2xl font-semibold">prompt response</p>
                            <p className="text-center font-light opacity-80">We aim to get back to you within 2 business days</p>
                        </div>
                    </div>
                </AnimatePresence>
            }
        </>
    )
}