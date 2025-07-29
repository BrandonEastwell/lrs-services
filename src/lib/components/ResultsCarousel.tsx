import ReactCompareImage from "react-compare-image";
import CarouselButtons from "./CarouselButtons";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCards} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

interface image {
    before: string
    after: string
}

export default function ResultsCarousel({ images } : { images: image[] }) {
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    const nextSlide = () => {
        if ((currentIndex + 1) > images.length) return;
        return setCurrentIndex(prevState => prevState + 1);
    }

    const prevSlide = () => {
        if ((currentIndex - 1) <= 0) return;
        return setCurrentIndex(prevState => prevState - 1);
    }
    return (
        <div className="w-full max-w-[550px] m-auto">
            <Swiper
                noSwiping={true}
                allowTouchMove={false}
                simulateTouch={false}
                effect={'cards'}
                grabCursor={false}
                mousewheel={{enabled: true}}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {images.map((image) => (
                    <SwiperSlide className="rounded-[20px]">
                        <div className="absolute flex flex-row font-bold z-1">
                            <p className="translate-y-4 translate-x-5 text-[#FFFFFFDE]">BEFORE</p>
                            <p className="translate-y-4 translate-x-60 text-[#FFFFFFDE]">AFTER</p>
                        </div>
                        <ReactCompareImage leftImage={image.before} rightImage={image.after} />
                    </SwiperSlide>
                ))}
                <CarouselButtons currentIndex={currentIndex} maxIndex={images.length} next={nextSlide} prev={prevSlide} />
            </Swiper>
        </div>
    )
}