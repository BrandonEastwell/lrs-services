interface features {
    title: string
    description: string
}

export default function HomeBenefitsSection( { features } : { features: features[] }) {
    return (
        <>
            <h2 className="text-4xl font-bold mb-7">Why your home benefits</h2>
            {features.map((feature) => (
                <div className="mb-7">
                    <h2 className="text-2xl font-semibold mb-1">{feature.title}</h2>
                    <p className="my-1.5 font-light text-sm">{feature.description}</p>
                </div>
            ))}
        </>
    )
}