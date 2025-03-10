import Map from "../../assets/map.svg";
import Location from "../../assets/location.svg";
import {ChangeEvent, useState} from "react";
import {motion} from "framer-motion";
import Check from "../../assets/check.svg"
import Warning from "../../assets/warning.svg"

export default function CheckYourPostcode() {
    const [postcode, setPostcode] = useState<string | null>(null);
    const [inArea, setInArea] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        setPostcode(event.target.value);
        setInArea(false);
        setError(null);
    }

    const postcodes: {[key: string]: string[]} = {
        Harwich: ["CO12"],
        Colchester: ["CO1", "CO2", "CO3", "CO4", "CO5", "CO6", "CO7"],
        Ipswich: ["IP1", "IP2", "IP3", "IP4", "IP5", "IP6", "IP7", "IP8", "IP9", "IP10"],
        ClactonOnSea: ["CO15", "CO16"],
        FrintonOnSea: ["CO13"],
        Manningtree: ["CO11"],
        Stowmarket: ["IP14"],
        Newmarket: ["CB8"],
        Braintree: ["CM7", "CM77"],
        Chelmsford: ["CM1", "CM2", "CM3"]
    };

    function getAreaCodeFromPostcode(postcode : string) {

        // cases
        //CO12 5DZ
        //CO125DZ
        //CO12XD
        //CO1 2XD
        postcode = postcode.toUpperCase().replaceAll(' ', '');
        if (postcode.length === 5) return postcode.slice(0,2);
        if (postcode.length === 6) return postcode.slice(0,3);
        if (postcode.length === 7) return postcode.slice(0,4);
        return null;
    }

    function checkPostcode() {
        if (!postcode) return setError("Enter your postcode")
        let areaCode = getAreaCodeFromPostcode(postcode);
        if (!areaCode) return setError("Not a valid postcode")
        for (const city in postcodes) {
            for (const area of postcodes[city]) {
                if (area.includes(areaCode)) {
                    setError(null);
                    return setInArea(true);
                }
            }
        }
        return setInArea(false);
    }

    return (
        <div className="flex flex-col place-items-center text-center pt-24 space-y-5">
            <img src={Map} alt="" width="64" height="64" />
            <p className="font-normal opacity-80">Not sure if we cover your area? Enter your postcode and find out.</p>
            <div className="max-w-[250px] w-full bg-[#0C1D35] bg-opacity-60 border-1 border-[#132C4F] shadow-[inset_0px_1px_0px_rgba(255, 255, 255, 0.04)] rounded-[20px] p-3">
                <form className="font-medium flex flex-row justify-between">
                    <input onChange={(event) => handleInputChange(event)} className="overflow-hidden outline-0 placeholder-white" type="text" placeholder="enter your postcode"/>
                    <div onClick={checkPostcode}>
                        <img src={Location} alt="" />
                    </div>
                </form>
            </div>
            <div className="text-sm">
                {inArea && !error && <motion.p
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    className="flex flex-row gap-1 font-normal opacity-80 text-green-700">You are in reach of our services<img src={Check} alt="" width="12" height="12"/></motion.p>}
                {error && <motion.p
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    className="flex flex-row gap-1 font-normal opacity-80 text-red-700">{error}<img src={Warning} alt="" width="12" height="12"/></motion.p>}
            </div>
        </div>
    )
}