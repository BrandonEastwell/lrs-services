import services from "../../../lib/datasets/services-pages-content.json";
import HeroSection from "../../../lib/components/HeroSection";
import Hero from "../../../assets/after/roof1.jpg";
import BookBtn from "../../../lib/components/BookBtn";
import HomeBenefitsSection from "../../../lib/components/HomeBenefitsSection";
import ServiceResults from "../../../lib/components/ServiceResults";
import GetStartedQuote from "../../../lib/components/GetStartedQuote";
import WhatWeDoSection from "../../../lib/components/WhatWeDoSection";
import FAQSection from "../../../lib/components/FAQSection";
import SectionContainer from "../../../lib/components/SectionContainer";

export default function RoofCleaning() {
    const { roofcleaning } = services;

    return (
        <>
            <HeroSection title={"Roof Cleaning Services"} subtitle={null} imageURL={Hero} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <HomeBenefitsSection features={roofcleaning.features} />
                <ServiceResults service={"roof"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0D141A"} >
                <GetStartedQuote text={"roof cleaning services"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <WhatWeDoSection methods={roofcleaning.methods} />
                <FAQSection faqs={roofcleaning.FAQ} />
            </SectionContainer>
        </>
    )
}