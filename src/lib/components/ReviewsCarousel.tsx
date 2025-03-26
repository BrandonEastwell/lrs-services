import TestimonialCard from "./TestimonialCard";
import {useState} from "react";
import ReviewsData from "../datasets/dataset_Google-Maps-Reviews-Scraper_2025-03-11_14-52-01-450.json";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import CarouselButtons from "./CarouselButtons";

interface reviews {
    "reviewerPhotoUrl": string,
    "reviewsCount": number,
    "stars": number,
    "reviewId": string,
    "name": string,
    "text": string
}

export default function ReviewsCarousel( { isMobile } : {isMobile : boolean}) {
    const [reviews, setReviews] = useState<reviews[]>(ReviewsData);
    const [currentIndex, setCurrentIndex] = useState<number>(1);

    const nextReview = () => {
        if ((currentIndex + 1) > reviews.length) return;
        return setCurrentIndex(prevState => prevState + 1);
    }

    const prevReview = () => {
        if ((currentIndex - 1) <= 0) return;
        return setCurrentIndex(prevState => prevState - 1);
    }

    return (
        <div>
            <h1 className="text-center text-white text-5xl xl:text-6xl font-bold mb-4">what they say</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={isMobile ? 1 : 3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 150,
                    modifier: 1,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper max-w-[1500px]"
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
            >
                {reviews.map((review) => (
                    <SwiperSlide className="place-items-center" key={review.reviewId}>
                        <TestimonialCard reviewData={review} />
                    </SwiperSlide>
                ))}
                <div className="w-full max-w-[500px] place-self-center">
                    <CarouselButtons currentIndex={currentIndex} maxIndex={reviews.length} next={nextReview} prev={prevReview} />
                </div>
            </Swiper>
        </div>
    )
}