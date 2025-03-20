import HeroSection from "../../../lib/components/HeroSection";
import Gutter from "../../../assets/after/gutter1.png"
import services from "../../../lib/datasets/services-pages-content.json"
import BookBtn from "../../../lib/components/BookBtn";
import FAQSection from "../../../lib/components/FAQSection";
import WhatWeDoSection from "../../../lib/components/WhatWeDoSection";
import GetStartedQuote from "../../../lib/components/GetStartedQuote";
import HomeBenefitsSection from "../../../lib/components/HomeBenefitsSection";
import ServiceResults from "../../../lib/components/ServiceResults";
export default function GutterCleaning() {
    const { guttercleaning } = services;

    return (
        <>
            <HeroSection title={"Gutter Cleaning Services"} subtitle={null} imageURL={Gutter} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] py-10 px-[30px]">
                <HomeBenefitsSection features={guttercleaning.features} />
                <ServiceResults service={"gutter"} />
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