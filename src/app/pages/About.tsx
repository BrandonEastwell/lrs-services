import whyLRS from "../../lib/datasets/whylrs.json"
import AboutCard from "../../lib/components/AboutCard";
import HeroSection from "../../lib/components/HeroSection";
import HeroImage from "../../assets/pressure.png"
import SectionContainer from "../../lib/components/SectionContainer";

export default function About() {
    const { sections } = whyLRS;
    return (
        <>
            <HeroSection title={"Why LRS"} subtitle={null} imageURL={HeroImage} button={null} />
            <SectionContainer fromGradient={"#0D141A"} toGradient={"#0F1D2C"} >
                <div className="flex flex-col gap-10 max-w-[1000px] place-self-center">
                    {sections.map((section) => (
                        <AboutCard title={section.title} description={section.description} order={section.order} />
                    ))}
                </div>
            </SectionContainer>
        </>
    )
}