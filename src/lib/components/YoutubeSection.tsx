import Health from "../../assets/health.svg";

export default function YoutubeSection() {

    return (
        <div>
            <h1 className=" text-white text-4xl font-bold mb-2">
                Reviving homes
            </h1>
            <p className=" opacity-80 font-light my-6">It would take you weeks to do what we do in a day, as the house detailing experts we know what it takes, so you dont have to.</p>
            <iframe className="w-full min-h-[225px] rounded-[20px]" src="https://www.youtube.com/embed/B45OxcVCsr0&t" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>
        </div>
    )
}