import {AnimatePresence, motion} from "framer-motion";
import ArrowRight from "../../assets/right_arrow.svg";

export default function FAQCard({ id, question, answer, openFAQ, onToggle } : { id: number, question: string, answer: string, openFAQ: number | null,  onToggle: (id: number | null) => void }) {
    const FAQAnswerVariants = {
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

    return (
        <motion.div
            variants={bgVariants}
            initial={"closed"}
            animate={openFAQ === id ? "open" : "closed"}
            className="rounded-[20px] border-[#132c4f]/4 overflow-hidden">
            <div onClick={() => onToggle(id)} className="flex flex-row justify-between px-6 py-5 items-center font-bold cursor-pointer">
                <div className="flex flex-row gap-3 items-center">
                    <motion.img
                        src={ArrowRight}
                        alt=""
                        width="20"
                        height="20"
                        variants={arrowVariants}
                        initial="closed"
                        animate={openFAQ === id ? "open" : "closed"}
                    />
                    <p className="text-base">{question}</p>
                </div>
            </div>
            <AnimatePresence>
                {openFAQ === id && (
                    <motion.div
                        variants={FAQAnswerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <div className="overflow-hidden px-5 pb-5">
                            <div className="text-white font-light">
                                <p>{answer}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}