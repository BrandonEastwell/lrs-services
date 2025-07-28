import {ReactElement} from "react";
import BookBtn from "./BookBtn";

export default function HeroSection({ title, subtitle, imageURL, button } : { title: string, subtitle: string | null, imageURL: string, button: ReactElement | null }) {
    return (
        <div className="relative w-full min-h-[50vh] pt-[70px] md:pt-[120px] px-[30px] md:px-[80px] z-10 overflow-hidden">
            <img
                src={imageURL}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover object-right -z-10"
                loading="eager"
                fetchPriority="high"
            />
            <div className="flex flex-col place-items-center space-y-7">
                <h1 className="text-center text-6xl md:text-7xl mix-blend-lighten text-white">{title}</h1>
                {subtitle && <h2 className="text-center text-2xl font-bold text-[#c3e2f7] mix-blend-screen">{subtitle}</h2>}
                {button && <BookBtn innerHTML={"Book appointment"} href={"/contact"} />}
            </div>
        </div>
    )
}