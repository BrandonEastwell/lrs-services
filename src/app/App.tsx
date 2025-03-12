import Postcode from "../lib/components/Postcode";
import Navbar from "../lib/components/Navbar";
import ReviewsCarousel from "../lib/components/ReviewsCarousel";
import ResultsCarousel from "../lib/components/ResultsCarousel";
import QuoteSection from "../lib/components/QuoteSection";
import ServicesSection from "../lib/components/ServicesSection";

function App() {

    return (
        <>
            <Navbar />
            <div className="bg-[url('../assets/pressure.png')] w-full h-screen bg-right bg-cover pt-[100px] px-[30px] z-10">
                <div className="flex flex-col place-items-center space-y-7">
                    <h1 className="text-center text-6xl mix-blend-plus-lighter opacity-85">Your home is our canvas.</h1>
                    <h2 className="text-center text-2xl font-bold text-[#3D8BC3] mix-blend-plus-lighter">make your home new again</h2>
                    <button className="bg-[#3D8BC3] border-[1px_solid_rgba(61,139,195,0.04)] shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">Book appointment</button>
                </div>
            </div>
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0F1D2C] px-[30px] py-20">
                <ServicesSection />
                <Postcode />
            </div>
            <QuoteSection />
            <div className="bg-gradient-to-b from-[#0D141A] to-[#0D141A] px-[30px] pb-20 pt-20 overflow-hidden">
                <ReviewsCarousel />
                <ResultsCarousel />
            </div>
        </>
    );
}

export default App;
