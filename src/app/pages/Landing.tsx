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

export default function Landing() {
    return (
        <>
            <HeroSection title={"Your home is our canvas"} subtitle={"make your home new again"} imageURL={HeroImage} button={<BookBtn
                innerHTML={"Book appointment"} href={"/contact"} />} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <WhyLRS />
                <div className="flex flex-col space-y-4 mt-7">
                    <h1 className="text-center text-5xl mb-12">our services</h1>
                    <ServiceList services={services}/>
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
                <ReviewsCarousel />
            </SectionContainer>
            <SectionContainer fromGradient={"#101820"} toGradient={"#080F16"} >
                <QuoteSection />
            </SectionContainer>
        </>

    )
}