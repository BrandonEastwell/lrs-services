import BookBtn from "../../lib/components/BookBtn";
import WhyLRS from "../../lib/components/WhyLRS";
import ServicesSection from "../../lib/components/ServicesSection";
import Postcode from "../../lib/components/Postcode";
import ResultsCarousel from "../../lib/components/ResultsCarousel";
import YoutubeSection from "../../lib/components/YoutubeSection";
import ReviewsCarousel from "../../lib/components/ReviewsCarousel";
import QuoteSection from "../../lib/components/QuoteSection";

export default function Landing() {
    return (
        <>
            <div className="bg-[url('../assets/pressure.png')] w-full h-screen bg-right bg-cover pt-[100px] px-[30px] z-10">
                <div className="flex flex-col place-items-center space-y-7">
                    <h1 className="text-center text-6xl mix-blend-plus-lighter opacity-85">Your home is our canvas.</h1>
                    <h2 className="text-center text-2xl font-bold text-[#3D8BC3] mix-blend-plus-lighter">make your home new again</h2>
                    <BookBtn innerHTML={"Book appointment"} />
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] px-[30px] py-10">
                <WhyLRS />
                <ServicesSection />
                <Postcode />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] py-10 space-y-10 overflow-hidden">
                <ResultsCarousel />
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
        </>
    )
}