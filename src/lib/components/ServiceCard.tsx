import {AnimatePresence, motion} from "framer-motion";
import ArrowRight from "../../assets/right_arrow.svg";
import LearnMoreBtn from "./LearnMoreBtn";
import Whatsapp from "../../assets/whatsapp.svg";

interface ServiceCardProps {
    id: string,
    name: string,
    number: string,
    description: string,
    image: any,
    openService: string | null,
    onToggle: (id: string | null) => void
}

function ServiceCardToggleable(service : ServiceCardProps) {
    const serviceContentVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

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

    const bgVariants = {
        closed: {
            background: "#0C1D35"
        },
        open: {
            background: "linear-gradient(180deg, #132C4F 0%, #0C1D35 100%)"
        }
    }

    const numberVariants = {
        closed: {
            opacity: 0.6
        },
        open: {
            opacity: 1
        }
    }

    return (
        <motion.div
            variants={bgVariants}
            initial={"closed"}
            animate={service.openService === service.id ? "open" : "closed"}
            className="rounded-[20px] bg-[#0C1D35] border-[#132c4f]/4 overflow-hidden">
            <div onClick={() => service.onToggle(service.id)} className="flex flex-row justify-between px-6 py-5 items-center font-bold cursor-pointer">
                <div className="flex flex-row gap-3 items-center">
                    <motion.img
                        src={ArrowRight}
                        alt=""
                        width="24"
                        height="24"
                        variants={arrowVariants}
                        initial="closed"
                        animate={service.openService === service.id ? "open" : "closed"}
                    />
                    <p className="text-xl">{service.name}</p>
                </div>
                <motion.p variants={numberVariants} initial={"closed"} animate={service.openService === service.id ? "open" : "closed"}>{service.number}.</motion.p>
            </div>
            <AnimatePresence>
                {service.openService === service.id && (
                    <motion.div
                        variants={serviceContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="md:grid md:grid-cols-2 md:gap-7 overflow-hidden px-6 pb-5">
                            <img src={service.image} alt={service.name} className="h-full w-full object-cover rounded-[7px] rounded-br-[50px]" />
                            <div className="flex flex-col justify-between text-white font-medium mt-4 md:mt-0">
                                <p>{service.description}</p>
                                <div className="flex items-center mt-4">
                                    <LearnMoreBtn href={`services/${service.name.replaceAll(' ', '').toLowerCase()}`} />
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <img src={Whatsapp} alt="WhatsApp" width="24" height="24" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

function ServiceCardStatic(service : ServiceCardProps) {
    return (
        <div className="rounded-[20px] bg-[#0C1D35] border-[#132c4f]/4 mb-4 overflow-hidden">
            <div className="flex flex-row justify-between px-6 py-5 items-center font-bold cursor-pointer">
                <div className="flex flex-row gap-3 items-center">
                    <p className="text-xl">{service.name}</p>
                </div>
                <p>{service.number}.</p>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-7 lg:grid-cols-1 overflow-hidden px-6 pb-5">
                <img src={service.image} alt={service.name} className="h-full w-full object-cover rounded-[7px] rounded-br-[50px]" />
                <div className="flex flex-col justify-between text-white font-medium mt-4 md:mt-0">
                    <p>{service.description}</p>
                    <div className="flex items-center mt-4">
                        <LearnMoreBtn href={`services/${service.name.replaceAll(' ', '').toLowerCase()}`} />
                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                            <img src={Whatsapp} alt="WhatsApp" width="24" height="24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { ServiceCardStatic, ServiceCardToggleable }