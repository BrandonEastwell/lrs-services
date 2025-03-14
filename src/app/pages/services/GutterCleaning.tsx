import HeroSection from "../../../lib/components/HeroSection";
import Gutter from "../../../assets/after/gutter1.png"
import services from "../../../lib/datasets/services-pages-content.json"
import ResultsCarousel from "../../../lib/components/ResultsCarousel";
import BookBtn from "../../../lib/components/BookBtn";
import FAQSection from "../../../lib/components/FAQSection";
import WhatWeDoSection from "../../../lib/components/WhatWeDoSection";
import GetStartedQuote from "../../../lib/components/GetStartedQuote";
import HomeBenefitsSection from "../../../lib/components/HomeBenefitsSection";
export default function GutterCleaning() {
    const { guttercleaning } = services;

    return (
        <>
            <HeroSection title={"Gutter Cleaning Services"} subtitle={null} imageURL={Gutter} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] py-10 px-[30px]">
                <HomeBenefitsSection features={guttercleaning.features} />
                <h2 className="text-4xl font-bold mb-7">Our results do the talking, <span className="bg-gradient-to-r from-[#3D8BC3] to-[#ECA133] bg-clip-text text-transparent">see.</span></h2>
                <ResultsCarousel />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] py-10 overflow-hidden">
                <GetStartedQuote />
            </div>
            <div className="bg-gradient-to-b from-[#101820] to-[#080F16] py-12 px-[30px]">
                <WhatWeDoSection methods={guttercleaning.methods} />
                <FAQSection faqs={guttercleaning.FAQ} />
            </div>
        </>
    )
}