import ServiceCard from "./ServiceCard";
import {useEffect, useRef, useState} from "react";
import {Service} from "../utils/services";

export default function ServiceList({ services } : { services: Service[] }) {
    const [openServiceId, setOpenServiceId] = useState<string | null>(null);

    /*
    // @ts-ignore
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        const id = services.findIndex((service)=> service.id === openServiceId);
        timeoutRef.current = setTimeout(() => {
            if ((id) < services.length - 1) setOpenServiceId(services[id + 1].id)
            else setOpenServiceId(services[0].id)
        }, 10000)
        return () => clearTimeout(timeoutRef.current!);
    },[openServiceId])
      */

    function toggleService(serviceId: string) {
        //if (timeoutRef.current) clearTimeout(timeoutRef.current);
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