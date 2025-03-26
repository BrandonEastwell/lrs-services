import Arrow from "../../assets/left_arrow.svg";
import {useEffect, useRef, useState} from "react";

interface ReviewProps {
    "reviewerPhotoUrl": string,
    "reviewsCount": number,
    "stars": number,
    "reviewId": string,
    "name": string,
    "text": string
}

export default function TestimonialCard({ reviewData } : {reviewData: ReviewProps}) {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const textRef = useRef(null);
    const stars = [];

    for (let i = 0; i < reviewData.stars; i++) {
        stars.push(<span>★</span>);
    }

    useEffect(() => {
        if (textRef.current) {
            const {scrollHeight, clientHeight} = textRef.current;
            setIsOverflowing(scrollHeight > clientHeight);
        }
    }, [reviewData.text]);

    function handleReadMore() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className={`${isExpanded ? "max-h-none" : "min-h-[350px]"} min-w-[400px] max-w-[500px] p-8 rounded-[35px] rounded-br-[0px] bg-gradient-to-b from-[#1A468E] to-[#3F77BC] border-1 border-[#FFFFFF]/4`}>
            <div className="flex flex-row items-center">
                <div className="w-20 h-20">
                    <img className="w-full h-full rounded-full" src={reviewData.reviewerPhotoUrl} alt="" width="80" height="80"/>
                </div>
                <div className="flex-1 p-3 text-left">
                    <p className="text-2xl font-medium ">{reviewData.name}</p>
                    <div className="flex justify-start gap-1 text-3xl text-[#ECA133]">
                        {stars}
                    </div>
                </div>
            </div>
            <div ref={textRef} className={`overflow-hidden ${isExpanded ? `min-h-[200px]` : `h-[145px]`}`}>
                <p className="font-light text-sm py-1">{reviewData.text}</p>
            </div>
            {isOverflowing && !isExpanded && <p onClick={handleReadMore} className="font-light text-sm py-1 underline">read more</p>}
        </div>
    )
}