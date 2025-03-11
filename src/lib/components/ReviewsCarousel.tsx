import TestimonialCard from "./TestimonialCard";
import {useState} from "react";
import ReviewsData from "../datasets/dataset_Google-Maps-Reviews-Scraper_2025-03-11_14-52-01-450.json";

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
    const [currentIndex, setCurrentIndex] = useState<number>(reviews.length / 2);

    const nextReview = () => {
        if ((currentIndex + 1) >= reviews.length) return setCurrentIndex(0);
        return setCurrentIndex(prevState => prevState + 1);
    }

    const prevReview = () => {
        if ((currentIndex - 1) < 0) return setCurrentIndex(reviews.length - 1);
        return setCurrentIndex(prevState => prevState - 1);
    }

    return (
        <TestimonialCard reviewData={reviews[currentIndex]} prevReview={prevReview} nextReview={nextReview}/>
    )
}