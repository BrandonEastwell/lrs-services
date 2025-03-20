import HeroSection from "../../../lib/components/HeroSection";
import Hero from "../../../assets/after/patio1.jpg";
import BookBtn from "../../../lib/components/BookBtn";
import HomeBenefitsSection from "../../../lib/components/HomeBenefitsSection";
import ServiceResults from "../../../lib/components/ServiceResults";
import GetStartedQuote from "../../../lib/components/GetStartedQuote";
import WhatWeDoSection from "../../../lib/components/WhatWeDoSection";
import FAQSection from "../../../lib/components/FAQSection";
import services from "../../../lib/datasets/services-pages-content.json";

export default function RenderCleaning() {
    const { rendercleaning } = services;

    return (
        <>
            <HeroSection title={"Render Cleaning Services"} subtitle={null} imageURL={Hero} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] py-10 px-[30px]">
                <HomeBenefitsSection features={rendercleaning.features} />
                <ServiceResults service={"patio"} />
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] py-10 overflow-hidden">
                <GetStartedQuote />
            </div>
            <div className="bg-gradient-to-b from-[#101820] to-[#080F16] py-12 px-[30px]">
                <WhatWeDoSection methods={rendercleaning.methods} />
                <FAQSection faqs={rendercleaning.FAQ} />
            </div>
        </>
    )
}