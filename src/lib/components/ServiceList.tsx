import ServiceCard from "./ServiceCard";
import {useState} from "react";
import {Service} from "../utils/services";

export default function ServiceList({ services } : { services: Service[] }) {
    const [openServiceId, setOpenServiceId] = useState<string | null>(null);

    function toggleService(serviceId: string) {
        if (openServiceId === serviceId) {
            setOpenServiceId(null);
        } else {
            setOpenServiceId(serviceId);
        }
    }

    return (
        <>
            {services.map((service) => (
                <ServiceCard key={service.id} id={service.id} name={service.name} number={service.number}
                             description={service.description} image={service.image} openService={openServiceId}
                             onToggle={() => toggleService(service.id)} />
            ))}
        </>
    )
}