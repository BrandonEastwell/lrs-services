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

export default function ReviewsCarousel() {
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
            <h1 className="text-center text-white text-5xl font-bold mb-2">what they say</h1>
            <p className="text-center font-light text-sm py-1 opacity-80">out of {reviews[0].reviewsCount} reviews</p>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper"
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.reviewId}>
                        <TestimonialCard reviewData={review} />
                    </SwiperSlide>
                ))}
                <CarouselButtons currentIndex={currentIndex} maxIndex={reviews.length} next={nextReview} prev={prevReview} />
            </Swiper>
        </div>
    )
}