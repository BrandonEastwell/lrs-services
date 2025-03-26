import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules"; // Add Autoplay
import 'swiper/css';
import 'swiper/css/scrollbar';

export default function WhyLRS() {
    return (
        <div className="mb-20">
            <Swiper
                scrollbar={{
                    hide: false,
                }}
                autoplay={{ delay: 6000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                modules={[Scrollbar, Autoplay]}
                className="mySwiper
               [&_.swiper-scrollbar]:!bg-transparent
               [&_.swiper-scrollbar]:!opacity-100
               [&_.swiper-scrollbar-drag]:!bg-white"
            >
                <SwiperSlide className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">1</p>
                    <p className="text-center text-xl font-semibold">Commitment to Excellence</p>
                    <p className="text-center font-light opacity-80 text-sm">We ensure every job meets the highest standards</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">2</p>
                    <p className="text-center text-xl font-semibold">Customer First</p>
                    <p className="text-center font-light opacity-80 text-sm">Personalized service tailored to your specific needs.</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">3</p>
                    <p className="text-center text-xl font-semibold">Eco-Friendly Solutions</p>
                    <p className="text-center font-light opacity-80 text-sm">Powerful cleaning with detergents safe for the environment.</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col space-y-2 min-h-[250px] px-8 place-content-center rounded-[20px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">4</p>
                    <p className="text-center text-xl font-semibold">Reliable & Affordable</p>
                    <p className="text-center font-light opacity-80 text-sm">Professional service at competitive prices with easy payments.</p>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}