import ReactCompareImage from "react-compare-image";
import CarouselButtons from "./CarouselButtons";
import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {getImagePairs} from "../utils/imagePairs";
import {EffectCards} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-cards';

interface image {
    before: string
    after: string
}

export default function ResultsCarousel() {
    const [currentIndex, setCurrentIndex] = useState<number>(1);
    const images : image[] = getImagePairs();
    
    const nextSlide = () => {
        if ((currentIndex + 1) > images.length) return;
        return setCurrentIndex(prevState => prevState + 1);
    }

    const prevSlide = () => {
        if ((currentIndex - 1) <= 0) return;
        return setCurrentIndex(prevState => prevState - 1);
    }
    return (
        <div>
            <h1 className="text-center text-white text-5xl font-bold mb-4">happy results</h1>
            <p className="text-center opacity-80 font-light my-6">As the house detailing experts we know what it takes, so you dont have to.</p>
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
                            <p className="translate-y-4 translate-x-5">BEFORE</p>
                            <p className="translate-y-4 translate-x-60">AFTER</p>
                        </div>
                        <ReactCompareImage leftImage={image.before} rightImage={image.after} />
                    </SwiperSlide>
                ))}
                <CarouselButtons currentIndex={currentIndex} maxIndex={images.length} next={nextSlide} prev={prevSlide} />
            </Swiper>
        </div>
    )
}