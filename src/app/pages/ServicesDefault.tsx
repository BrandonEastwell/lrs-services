import {services} from "../../lib/utils/services";
import BookBtn from "../../lib/components/BookBtn";
import HeroSection from "../../lib/components/HeroSection";
import HeroImage from "../../assets/pressure.png";
import SectionContainer from "../../lib/components/SectionContainer";
import ServiceList from "../../lib/components/ServiceList";

export default function ServicesDefault() {
    return (
        <>
            <HeroSection title={"Services"} subtitle={null} imageURL={HeroImage} button={null} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <div className="place-self-center">
                    <BookBtn innerHTML={"Book appointment"} href={"/contact"} />
                </div>
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-2 mt-7">
                    <ServiceList services={services} toggleable={false} />
                </div>
            </SectionContainer>
        </>
    )
}