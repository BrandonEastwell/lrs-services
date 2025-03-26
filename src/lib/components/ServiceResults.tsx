import ResultsCarousel from "./ResultsCarousel";
import {getImagePairs} from "../utils/imagePairs";

export default function ServiceResults({service} : {service : string}) {
    return (
        <div>
            <h2 className="text-4xl text-center font-bold mb-7 mt-7">Our results do the talking, <span className="bg-gradient-to-r from-[#3D8BC3] to-[#ECA133] bg-clip-text text-transparent">see.</span></h2>
            <ResultsCarousel images={getImagePairs(service)} />
        </div>
    )
}