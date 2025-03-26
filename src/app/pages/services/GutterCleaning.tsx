import HeroSection from "../../../lib/components/HeroSection";
import Gutter from "../../../assets/after/gutter1.png"
import services from "../../../lib/datasets/services-pages-content.json"
import BookBtn from "../../../lib/components/BookBtn";
import FAQSection from "../../../lib/components/FAQSection";
import WhatWeDoSection from "../../../lib/components/WhatWeDoSection";
import GetStartedQuote from "../../../lib/components/GetStartedQuote";
import HomeBenefitsSection from "../../../lib/components/HomeBenefitsSection";
import ServiceResults from "../../../lib/components/ServiceResults";
import SectionContainer from "../../../lib/components/SectionContainer";
export default function GutterCleaning() {
    const { guttercleaning } = services;

    return (
        <>
            <HeroSection title={"Gutter Cleaning Services"} subtitle={null} imageURL={Gutter} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <HomeBenefitsSection features={guttercleaning.features} />
                <ServiceResults service={"gutter"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0D141A"} >
                <GetStartedQuote />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <WhatWeDoSection methods={guttercleaning.methods} />
                <FAQSection faqs={guttercleaning.FAQ} />
            </SectionContainer>
        </>
    )
}