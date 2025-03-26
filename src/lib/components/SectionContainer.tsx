import {ReactNode} from "react";

export default function SectionContainer({fromGradient, toGradient, children} : {fromGradient: string, toGradient: string, children: ReactNode}) {
    return (
        <div className={`bg-gradient-to-b from-[${fromGradient}] to-[${toGradient}] px-[30px] md:px-[100px] xl:px-[150px] py-10 overflow-hidden`}>
            {children}
        </div>
    )
}