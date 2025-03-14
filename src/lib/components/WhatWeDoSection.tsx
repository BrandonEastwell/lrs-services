
interface methods {
    title: string
    description: string
}

export default function WhatWeDoSection( { methods } : { methods: methods[] }) {
    return (
        <>
            <h2 className="text-4xl font-bold mb-7">What we do</h2>
            {methods.map((method) => (
                <div className="mb-7">
                    <h2 className="text-2xl font-semibold mb-1">{method.title}</h2>
                    <p className="my-1.5 font-light text-sm">{method.description}</p>
                </div>
            ))}
        </>
    )
}