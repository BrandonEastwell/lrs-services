import Arrow from "../../assets/left_arrow.svg";
import {useSwiper} from "swiper/react";

export default function CarouselButtons({currentIndex, maxIndex, prev, next} : {currentIndex: number, maxIndex: number, prev: () => void, next: () => void} ) {
    const swiper = useSwiper();
    return (
        <div className="flex flex-row justify-end gap-4 mt-2">
            <p className="text-center font-light text-sm py-1 opacity-80">{currentIndex} of {maxIndex}</p>
            <button onClick={() => {
                prev();
                swiper.slidePrev()
            }} className="flex w-10 h-10 items-center justify-center bg-white/6 rounded-full border-1 border-[#132C4F]/4"><img src={Arrow} alt=""/></button>
            <button onClick={() => {
                next();
                swiper.slideNext()
            }} className="flex w-10 h-10 items-center justify-center bg-white/6 rounded-full border-1 border-[#132C4F]/4"><img className="rotate-180" src={Arrow} alt=""/></button>
        </div>
    )
}