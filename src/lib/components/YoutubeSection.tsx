import BookBtn from "./BookBtn";

export default function YoutubeSection() {

    return (
        <div>
            <p className="text-center text-white text-2xl xl:text-4xl font-bold my-4">It would take you weeks to do what we do in a day.</p>
            <iframe className="w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] xl:min-h-[600px] rounded-[20px]" src="https://www.youtube.com/embed/B45OxcVCsr0" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <div className="flex flex-col place-items-center my-4 mt-4">
                <BookBtn innerHTML={"Get an estimate"} href={"/contact"} />
            </div>
        </div>
    )
}