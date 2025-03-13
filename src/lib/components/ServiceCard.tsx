import {AnimatePresence, motion} from "framer-motion";
import ArrowRight from "../../assets/right_arrow.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import {Link} from "react-router-dom";

interface ServiceCardProps {
    id: string,
    name: string,
    number: string,
    description: string,
    image: any,
    openService: string | null,
    setOpenService: (id: string | null) => void
}

export default function ServiceCard(serviceCard : ServiceCardProps) {
    function toggleService(serviceId: string) {
        if (serviceCard.openService === serviceId) {
            serviceCard.setOpenService(null);
        } else {
            serviceCard.setOpenService(serviceId);
        }
    }

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
            animate={serviceCard.openService === serviceCard.id ? "open" : "closed"}
            className="overflow-hidden rounded-[20px] bg-[#0C1D35] bg-opacity-60 border-[1px_solid_rgba(19, 44, 79, 0.04)] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)]">
            <div onClick={() => toggleService(serviceCard.id)} className="flex flex-row justify-between p-5 items-center font-bold cursor-pointer">
                <div className="flex flex-row gap-3 items-center">
                    <motion.img
                        src={ArrowRight}
                        alt=""
                        width="24"
                        height="24"
                        variants={arrowVariants}
                        initial="closed"
                        animate={serviceCard.openService === serviceCard.id ? "open" : "closed"}
                    />
                    <p className="text-xl">{serviceCard.name}</p>
                </div>
                <motion.p variants={numberVariants} initial={"closed"} animate={serviceCard.openService === serviceCard.id ? "open" : "closed"}>{serviceCard.number}.</motion.p>
            </div>
            <AnimatePresence>
                {serviceCard.openService === serviceCard.id && (
                    <motion.div
                        variants={serviceContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="overflow-hidden px-6 pb-5">
                            <img src={serviceCard.image} alt={serviceCard.name} className="w-full rounded-[7px] rounded-br-[50px]" />
                            <div className="text-white font-medium mt-4">
                                <p>{serviceCard.description}</p>
                                <div className="flex items-center mt-4">
                                    <Link to={`services/${serviceCard.name.replaceAll(' ', '').toLowerCase()}`}>
                                        <button className="bg-white border text-black py-2 px-6 rounded-full mr-4">
                                            Learn more
                                        </button>
                                    </Link>
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