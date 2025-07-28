interface features {
    title: string
    description: string
}

export default function HomeBenefitsSection( { features } : { features: features[] }) {
    return (
        <div className="mb-22 xl:px-[100px]">
            <h2 className="text-4xl xl:text-5xl font-bold mb-7 text-[#FFFFFFDE]">Why your home <span className="bg-gradient-to-r from-[#3D8BC3] to-[#ECA133] bg-clip-text text-transparent">benefits</span></h2>
            {features.map((feature) => (
                <div className="mb-7">
                    <h2 className="text-2xl font-semibold mb-1 text-[#FFFFFFDE]">{feature.title}</h2>
                    <p className="my-1.5 font-light text-sm xl:text-base text-[#FFFFFFDE]">{feature.description}</p>
                </div>
            ))}
        </div>
    )
}