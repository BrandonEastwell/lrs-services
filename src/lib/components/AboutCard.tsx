import BookBtn from "./BookBtn";

export default function AboutCard({title, description, order} : {title: string, description: string, order: string}) {
    const splitDesc = description.split("\n\n");
    return (
        <>
            <div className="flex flex-col px-6 py-6 rounded-[40px] rounded-tl-[0px] bg-gradient-to-b from-[#0D141A] to-[#0D141A] border-1 border-[#FFFFFF]/4">
                <p className="text-6xl mb-10 font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">{ order }</p>
                <h2 className="text-3xl font-bold mb-4">{title}</h2>
                {splitDesc.map((desc) => (
                    <p className="my-1.5 font-light text-base">{desc}</p>
                ))}
            </div>
            <div className="self-center">
                <BookBtn href={"/contact"} innerHTML={"Book appointment"} />
            </div>
        </>
    )
}