import {services} from "../utils/services";
import {useState} from "react";
import ArrowRight from "../../assets/icons/right_arrow.svg";
import {AnimatePresence, motion} from "framer-motion";
import {useForm} from "react-hook-form";
import Inquiry from "../../assets/icons/inquiry.svg";
import LoadingBar from "./LoadingBar";
import {OrbitProgress} from "react-loading-indicators";

export default function QuoteForm( { formSubmitted, setFormSubmitted } : { formSubmitted : boolean, setFormSubmitted : (b: boolean) => void }) {
    const [showOptions, setShowOptions] = useState(false);
    const [cleaningService, setCleaningService] = useState<string | null>(null);
    const {register, handleSubmit, formState: { errors } } = useForm()
    const [isLoading, setIsLoading] = useState(false);
    const [formResponse, setFormResponse] = useState<string | null>(null)

    async function handleFormSubmit(formData: any) {
        console.log("Form Data:", formData);
        try {
            setIsLoading(true)
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    service: cleaningService,
                    extra: formData.extra
                })
            })

            const resData = await res.json();

            if (res.ok) {
                console.log(resData.message);
                setIsLoading(false)
                setFormResponse(resData.message)
                setFormSubmitted(true);
            } else {
                console.error(resData.error);
                setIsLoading(false)
                setFormResponse(resData.error)
            }
        } catch (e) {
            console.error(e);
        }
    }

    const arrowVariants = {
        closed: {
            rotate: 0,
            transition: { duration: 0.3 }
        },
        open: {
            rotate: 90,
            transition: { duration: 0.3 }
        }
    };

    const serviceOptionsVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                opacity: {duration: 0.2, ease: "easeInOut"},
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                opacity: {duration: 0.5, ease: "easeInOut"},
            }
        }
    };

    const errorMessagesVariants = {
        hidden: {
            y: -20,
            opacity: 0,
            transition: {
                opacity: {duration: 0.2, ease: "easeInOut"},
            }
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                opacity: {duration: 0.2, ease: "easeInOut"},
            }
        }
    }

    return (
        <>
            <LoadingBar isLoading={isLoading} />
            <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-1 w-full max-w-[550px] place-items-center p-12 my-2 bg-gradient-to-b rounded-[20px] from-[#132C4F] to-[#0C1D35] border-1 border-[#132C4F]/4 shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)]">
                <div className="w-full bg-[#0C1D35]/60 border-1 border-[#132C4F] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3">
                    <input {...register("name", {
                        required: "Full name is required",
                        pattern: {
                            value: /^[A-Za-z]+(?: [a-zA-Z]+)*$/,
                            message: "Enter your full name (e.g. John Doe)"
                        }
                    })} id="name" name="name" className="w-full placeholder-white" type="text" placeholder="Full name"/>
                </div>
                <AnimatePresence>
                    {errors.name?.message &&
                        <motion.span variants={errorMessagesVariants}
                                     initial="hidden"
                                     animate="visible"
                                     exit="hidden"
                                     className="text-[0.75em] place-self-start pl-2 font-light opacity-80 text-red-700">{String(errors.name.message)}</motion.span>}
                </AnimatePresence>
                <div className="w-full bg-[#0C1D35]/60 border-1 border-[#132C4F] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3 mt-3">
                    <input {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        }
                    })} className="w-full placeholder-white text-[#FFFFFF]" name="email" type="email" placeholder="Email"/>
                </div>
                <AnimatePresence>
                    {errors.email?.message &&
                        <motion.span variants={errorMessagesVariants}
                                     initial="hidden"
                                     animate="visible"
                                     exit="hidden"
                                     className="text-[0.75em] place-self-start pl-2 font-light opacity-80 text-red-700">{String(errors.email.message)}</motion.span>}
                </AnimatePresence>
                <div className="w-full bg-[#0C1D35]/60 border-1 border-[#132C4F] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3 mt-3">
                    <input {...register("phone", {
                        required: "Phone number is required",
                        pattern: {
                            value: /^(?:\+44|0)7\d{9}$/,
                            message: "Invalid UK phone number"
                        }
                    })} className="w-full placeholder-white text-[#FFFFFF]" name="phone" type="tel" placeholder="Phone number"/>
                </div>
                <AnimatePresence>
                    {errors.phone?.message &&
                        <motion.span variants={errorMessagesVariants}
                                     initial="hidden"
                                     animate="visible"
                                     exit="hidden"
                                     className="text-[0.75em] place-self-start pl-2 font-light opacity-80 text-red-700">{String(errors.phone.message)}</motion.span>}
                </AnimatePresence>
                <div onClick={() => setShowOptions(!showOptions)} className="w-full bg-[#0C1D35]/60 border-1 border-[#132C4F] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3 mt-3">
                <span className="flex flex-row justify-between">{cleaningService ? cleaningService : "Cleaning service"}<motion.img
                    src={ArrowRight}
                    alt=""
                    width="22"
                    height="22"
                    variants={arrowVariants}
                    initial="closed"
                    animate={showOptions ? "open" : "closed"}
                />
                </span>
                    <AnimatePresence>
                        {showOptions && <motion.ul
                            className="overflow-hidden pt-1"
                            variants={serviceOptionsVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden">
                            {services.map((service) => (
                                <li key={service.id} onClick={() => setCleaningService(service.name)} className="py-1.5 cursor-pointer text-[#FFFFFF]">{service.name}</li>
                            ))}
                            <li key={"Other"} onClick={() => setCleaningService("Other")} className="py-1.5 cursor-pointer text-[#FFFFFF]">Other</li>
                        </motion.ul>}
                    </AnimatePresence>
                </div>
                <div className="w-full min-h-[250px] bg-[#0C1D35]/60 border-1 border-[#132C4F] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3 mt-3">
                    <textarea {...register("extra")} className="w-full h-full placeholder-white outline-0" name="extra" placeholder="Anything we need to know?" rows={9}></textarea>
                </div>
                {!isLoading && !formSubmitted &&
                    <AnimatePresence>
                        <motion.button
                            variants={errorMessagesVariants} initial="hidden" animate="visible" exit="hidden"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}
                            className="w-full flex flex-row justify-center gap-2 bg-[#F99D1B]/10 border-1 border-[#132C4F]/10 shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3 mt-3" type="submit">
                            Send inquiry<img src={Inquiry} alt="" width="20" height="20"/>
                        </motion.button>
                    </AnimatePresence>}
                {isLoading && <OrbitProgress color="#ffffff" size="small" text="" textColor="" />}
                {formResponse && formSubmitted && <p className="mt-4 text-green-400">{formResponse}</p>}
                {formResponse && !formSubmitted && <p className="mt-4 text-red-400">{formResponse}</p>}
            </form>
        </>

    )
}