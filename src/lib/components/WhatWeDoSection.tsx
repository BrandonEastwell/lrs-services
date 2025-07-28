
interface methods {
    title: string
    description: string
}

export default function WhatWeDoSection( { methods } : { methods: methods[] }) {
    return (
        <div className="mb-15 xl:px-[100px]">
            <h2 className="text-4xl xl:text-5xl font-bold mb-7 text-[#FFFFFF]">From <span className="text-[#ECA133]">start</span> to <span className="text-[#3D8BC3]">finish</span></h2>
            {methods.map((method) => (
                <div className="mb-7">
                    <h2 className="text-2xl font-semibold mb-1 text-[#FFFFFF]">{method.title}</h2>
                    <p className="my-1.5 font-light text-sm xl:text-base text-[#FFFFFF]">{method.description}</p>
                </div>
            ))}
        </div>
    )
}