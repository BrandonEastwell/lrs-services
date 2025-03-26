import HeroSection from "../../../lib/components/HeroSection";
import Hero from "../../../assets/after/patio1.jpg";
import BookBtn from "../../../lib/components/BookBtn";
import HomeBenefitsSection from "../../../lib/components/HomeBenefitsSection";
import ServiceResults from "../../../lib/components/ServiceResults";
import GetStartedQuote from "../../../lib/components/GetStartedQuote";
import WhatWeDoSection from "../../../lib/components/WhatWeDoSection";
import FAQSection from "../../../lib/components/FAQSection";
import services from "../../../lib/datasets/services-pages-content.json";
import SectionContainer from "../../../lib/components/SectionContainer";

export default function RenderCleaning() {
    const { rendercleaning } = services;

    return (
        <>
            <HeroSection title={"Render Cleaning Services"} subtitle={null} imageURL={Hero} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <HomeBenefitsSection features={rendercleaning.features} />
                <ServiceResults service={"patio"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0D141A"} >
                <GetStartedQuote />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <WhatWeDoSection methods={rendercleaning.methods} />
                <FAQSection faqs={rendercleaning.FAQ} />
            </SectionContainer>
        </>
    )
}