import HeroSection from "../../../lib/components/HeroSection";
import Hero from "../../../assets/after/patio1.jpg";
import BookBtn from "../../../lib/components/BookBtn";
import services from "../../../lib/datasets/services-pages-content.json";
import SectionContainer from "../../../lib/components/SectionContainer";
import {lazy} from "react";

const WhatWeDoSection = lazy(() => import("../../../lib/components/WhatWeDoSection"));
const GetStartedQuote = lazy(() => import("../../../lib/components/GetStartedQuote"));
const FAQSection = lazy(() => import("../../../lib/components/FAQSection"));
const ServiceResults = lazy(() => import("../../../lib/components/ServiceResults"));
const HomeBenefitsSection = lazy(() => import("../../../lib/components/HomeBenefitsSection"));

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
                <GetStartedQuote text={"render cleaning services"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <WhatWeDoSection methods={rendercleaning.methods} />
                <FAQSection faqs={rendercleaning.FAQ} />
            </SectionContainer>
        </>
    )
}