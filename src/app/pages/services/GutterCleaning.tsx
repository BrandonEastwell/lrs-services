import HeroSection from "../../../lib/components/HeroSection";
import Gutter from "../../../assets/after/gutter1.png"
import services from "../../../lib/datasets/services-pages-content.json"
import BookBtn from "../../../lib/components/BookBtn";
import SectionContainer from "../../../lib/components/SectionContainer";
import {lazy} from "react";

const WhatWeDoSection = lazy(() => import("../../../lib/components/WhatWeDoSection"));
const GetStartedQuote = lazy(() => import("../../../lib/components/GetStartedQuote"));
const FAQSection = lazy(() => import("../../../lib/components/FAQSection"));
const ServiceResults = lazy(() => import("../../../lib/components/ServiceResults"));
const HomeBenefitsSection = lazy(() => import("../../../lib/components/HomeBenefitsSection"));

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
                <GetStartedQuote text={"gutter cleaning services"} />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <WhatWeDoSection methods={guttercleaning.methods} />
                <FAQSection faqs={guttercleaning.FAQ} />
            </SectionContainer>
        </>
    )
}