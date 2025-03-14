import whyLRS from "../../lib/datasets/whylrs.json"
import AboutCard from "../../lib/components/AboutCard";
import HeroSection from "../../lib/components/HeroSection";
import HeroImage from "../../assets/pressure.png"

export default function About() {
    const { sections } = whyLRS;
    return (
        <>
            <HeroSection title={"Why LRS"} subtitle={null} imageURL={HeroImage} button={null} />
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] py-12 px-[30px]">
                <div className="flex flex-col space-y-10">
                    {sections.map((section) => (
                        <AboutCard title={section.title} description={section.description} order={section.order} />
                    ))}
                </div>
            </div>
        </>
    )
}