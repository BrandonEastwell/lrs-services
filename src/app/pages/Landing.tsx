import BookBtn from "../../lib/components/BookBtn";
import WhyLRS from "../../lib/components/WhyLRS";
import Postcode from "../../lib/components/Postcode";
import ResultsCarousel from "../../lib/components/ResultsCarousel";
import YoutubeSection from "../../lib/components/YoutubeSection";
import ReviewsCarousel from "../../lib/components/ReviewsCarousel";
import QuoteSection from "../../lib/components/QuoteSection";
import ServiceList from "../../lib/components/ServiceList";
import {services} from "../../lib/utils/services";
import HeroSection from "../../lib/components/HeroSection";
import HeroImage from "../../assets/pressure.png"
import {getImagePairs} from "../../lib/utils/imagePairs";
import { motion } from "framer-motion";

export default function Landing() {
    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    };
    return (
        <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <HeroSection title={"Your home is our canvas"} subtitle={"make your home new again"} imageURL={HeroImage} button={<BookBtn
                innerHTML={"Book appointment"} href={"/contact"} />} />
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] px-[30px] py-10">
                <WhyLRS />
                <div className="flex flex-col space-y-4 mt-7">
                    <h1 className="text-center text-5xl mb-12">our services</h1>
                    <ServiceList services={services}/>
                </div>
                <Postcode />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] py-10 space-y-10 overflow-hidden">
                <h1 className="text-center text-white text-5xl font-bold mb-4">happy results</h1>
                <p className="text-center opacity-80 font-light my-6">As the house detailing experts we know what it takes, so you dont have to.</p>
                <ResultsCarousel images={getImagePairs(null)} />
            </div>
            <div className="bg-gradient-to-b from-[#0F1D2C] to-[#0F1D2C] px-[30px] py-10 space-y-10 overflow-hidden">
                <YoutubeSection />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] py-10 space-y-10 overflow-hidden">
                <ReviewsCarousel />
            </div>
            <div className="bg-gradient-to-b from-[#101820] to-[#080F16] px-[30px] py-10">
                <QuoteSection />
            </div>
        </motion.div>
    )
}