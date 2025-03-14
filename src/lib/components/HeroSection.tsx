import {ReactElement} from "react";
import BookBtn from "./BookBtn";

export default function HeroSection({ title, subtitle, imageURL, button } : { title: string, subtitle: string | null, imageURL: string, button: ReactElement | null }) {
    return (
        <div style={{ backgroundImage: `url(${imageURL})` }} className="w-full min-h-[50vh] bg-right bg-cover pt-[100px] px-[30px] z-10">
            <div className="flex flex-col place-items-center space-y-7">
                <h1 className="text-center text-6xl mix-blend-plus-lighter opacity-85">{title}</h1>
                {subtitle && <h2 className="text-center text-2xl font-bold text-[#3D8BC3] mix-blend-plus-lighter">{subtitle}</h2>}
                {button && <BookBtn innerHTML={"Book appointment"} href={"/contact"} />}
            </div>
        </div>
    )
}