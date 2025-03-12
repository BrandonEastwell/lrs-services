import {services} from "../utils/services";
import ServiceCard from "./ServiceCard";
import {useState} from "react";

export default function ServicesSection() {
    const [openService, setOpenService] = useState<string | null>(null);

    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-center text-5xl mix-blend-plus-lighter opacity-85 mb-12">our services</h1>
            {services.map((service) => (
                <ServiceCard key={service.id} id={service.id} name={service.name} number={service.number}
                             description={service.description} image={service.image} openService={openService}
                             setOpenService={() => setOpenService(service.id)} />
            ))}
        </div>
    )
}