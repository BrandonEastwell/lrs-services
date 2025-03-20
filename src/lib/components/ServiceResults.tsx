import ResultsCarousel from "./ResultsCarousel";
import {getImagePairs} from "../utils/imagePairs";

export default function ServiceResults({service} : {service : string}) {
    return (
        <>
            <h2 className="text-4xl font-bold mb-7">Our results do the talking, <span className="bg-gradient-to-r from-[#3D8BC3] to-[#ECA133] bg-clip-text text-transparent">see.</span></h2>
            <ResultsCarousel images={getImagePairs(service)} />
        </>
    )
}