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
import SectionContainer from "../../lib/components/SectionContainer";
import {useEffect, useState} from "react";

export default function Landing() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <HeroSection title={"Your home is our canvas"} subtitle={"make your home new again"} imageURL={HeroImage} button={<BookBtn
                innerHTML={"Book appointment"} href={"/contact"} />} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <h1 className="text-center text-white text-5xl font-semibold mb-7 mix-blend-plus-lighter opacity-85">Why LRS</h1>
                { isMobile && <WhyLRS /> }
                { !isMobile && <div className="grid grid-cols-2 gap-2 mb-10">
                    <div className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                        <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">1</p>
                        <p className="text-center text-xl font-semibold">Commitment to Excellence</p>
                        <p className="text-center font-light opacity-80 text-sm">We ensure every job meets the highest standards</p>
                    </div>
                    <div className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                        <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">2</p>
                        <p className="text-center text-xl font-semibold">Customer First</p>
                        <p className="text-center font-light opacity-80 text-sm">Personalized service tailored to your specific needs.</p>
                    </div>
                    <div className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                        <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">3</p>
                        <p className="text-center text-xl font-semibold">Eco-Friendly Solutions</p>
                        <p className="text-center font-light opacity-80 text-sm">Powerful cleaning with detergents safe for the environment.</p>
                    </div>
                    <div className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                        <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">4</p>
                        <p className="text-center text-xl font-semibold">Reliable & Affordable</p>
                        <p className="text-center font-light opacity-80 text-sm">Professional service at competitive prices with easy payments.</p>
                    </div>
                </div> }
                <h1 className="text-center text-5xl mb-12">our services</h1>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mt-7">
                    {isMobile && <ServiceList services={services} toggleable={true} />}
                    {!isMobile && <ServiceList services={services} toggleable={false} />}
                </div>
                <Postcode />
            </SectionContainer>
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0D141A"} >
                <h1 className="text-center text-white text-5xl font-bold mb-4">happy results</h1>
                <p className="text-center opacity-80 font-light my-6">As the house detailing experts we know what it takes, so you dont have to.</p>
                <ResultsCarousel images={getImagePairs(null)} />
            </SectionContainer>
            <SectionContainer fromGradient={"#0F1D2C"} toGradient={"#0F1D2C"} >
                <YoutubeSection />
            </SectionContainer>
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0D141A"} >
                <ReviewsCarousel isMobile={isMobile} />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <QuoteSection />
            </SectionContainer>
        </>
    )
}