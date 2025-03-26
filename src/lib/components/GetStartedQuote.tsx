import BookBtn from "./BookBtn";

export default function GetStartedQuote({ text } : { text: string }) {
    return (
        <div className="flex flex-col gap-5 place-items-center mb-7 mt-7">
            <h2 className="text-center text-4xl font-bold xl:px-[200px]">Get your <span className="text-[#ECA133]"> free </span> quote for {text}</h2>
            <BookBtn href={"/contact"} innerHTML={"Get a quote"} />
        </div>
    )
}