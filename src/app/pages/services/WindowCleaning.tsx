import services from "../../../lib/datasets/services-pages-content.json";
import HeroSection from "../../../lib/components/HeroSection";
import Hero from "../../../assets/portfolio/window.png";
import BookBtn from "../../../lib/components/BookBtn";
import SectionContainer from "../../../lib/components/SectionContainer";
import {lazy} from "react";

const WhatWeDoSection = lazy(() => import("../../../lib/components/WhatWeDoSection"));
const GetStartedQuote = lazy(() => import("../../../lib/components/GetStartedQuote"));
const FAQSection = lazy(() => import("../../../lib/components/FAQSection"));
const ServiceResults = lazy(() => import("../../../lib/components/ServiceResults"));
const HomeBenefitsSection = lazy(() => import("../../../lib/components/HomeBenefitsSection"));

export default function WindowCleaning() {
    const { windowcleaning } = services;

    return (
        <>
            <HeroSection title={"Window Cleaning Services"} subtitle={null} imageURL={Hero} button={<BookBtn href={"/contact"} innerHTML={"Book appointment"} />} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <HomeBenefitsSection features={windowcleaning.features} />
                <ServiceResults service={"conservatory"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0D141A"} >
                <GetStartedQuote text={"window cleaning services"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <WhatWeDoSection methods={windowcleaning.methods} />
                <FAQSection faqs={windowcleaning.FAQ} />
            </SectionContainer>
        </>
    )
}