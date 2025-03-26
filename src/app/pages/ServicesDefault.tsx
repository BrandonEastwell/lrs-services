import {services} from "../../lib/utils/services";
import BookBtn from "../../lib/components/BookBtn";
import HeroSection from "../../lib/components/HeroSection";
import HeroImage from "../../assets/pressure.png";
import LearnMoreBtn from "../../lib/components/LearnMoreBtn";
import Whatsapp from "../../assets/whatsapp.svg";
import SectionContainer from "../../lib/components/SectionContainer";

export default function ServicesDefault() {
    return (
        <>
            <HeroSection title={"Services"} subtitle={null} imageURL={HeroImage} button={null} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <BookBtn innerHTML={"Book appointment"} href={"/contact"} />
                <div className="flex flex-col space-y-4 mt-7">
                    {services.map((service) => (
                        <div className="rounded-[20px] bg-[#0C1D35] border-1 border-[#132c4f]/4 overflow-hidden">
                            <div className="flex flex-row justify-between px-6 py-5 items-center font-bold cursor-pointer">
                                <div className="flex flex-row gap-3 items-center">
                                    <p className="text-xl">{service.name}</p>
                                </div>
                                <p>{service.number}.</p>
                            </div>
                            <div className="overflow-hidden px-6 pb-5">
                                <img src={service.image} alt={service.name} className="w-full rounded-[7px] rounded-br-[50px]" />
                                <div className="text-white font-medium mt-4">
                                    <p>{service.description}</p>
                                    <div className="flex items-center mt-4">
                                        <LearnMoreBtn href={`${service.name.replaceAll(' ', '').toLowerCase()}`} />
                                        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                            <img src={Whatsapp} alt="WhatsApp" width="24" height="24" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>
        </>
    )
}