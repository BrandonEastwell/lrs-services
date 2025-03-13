import BookBtn from "./BookBtn";

export default function YoutubeSection() {

    return (
        <div>
            <p className="text-center text-white text-2xl font-bold my-4">It would take you weeks to do what we do in a day.</p>
            <iframe className="w-full min-h-[200px] rounded-[20px]" src="https://www.youtube.com/embed/B45OxcVCsr0" frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
            </iframe>
            <div className="flex flex-col place-items-center my-4">
                <BookBtn innerHTML={"Get an estimate"} />
            </div>
        </div>
    )
}