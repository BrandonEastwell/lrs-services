import BookBtn from "./BookBtn";

export default function GetStartedQuote() {
    return (
        <div className="flex flex-col gap-5 place-items-center">
            <h2 className="text-center text-4xl font-bold">Get started with a <span className="text-[#ECA133]">free</span> quote!</h2>
            <BookBtn href={"/contact"} innerHTML={"Get a quote"} />
        </div>
    )
}