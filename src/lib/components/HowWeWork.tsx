import Calendar from "../../assets/calendar.svg";

export default function HowWeWork() {

    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-center text-white text-5xl font-semibold">How we work</h1>
                <div className="flex flex-col gap-2 min-h-[200px] px-8 py-8 place-items-center rounded-[20px] rounded-br-[0px] bg-gradient-to-b from-[#000000] to-[#060B11] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">1</p>
                    <p className="text-center text-xl font-semibold">online estimate</p>
                    <p className="text-center font-light opacity-80 text-sm">Get a quote and we schedule your appointment</p>
                </div>
                <div className="flex flex-col gap-2 min-h-[200px] px-8 py-8 place-items-center rounded-[20px] rounded-br-[0px] bg-gradient-to-b from-[#000000] to-[#060B11] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">2</p>
                    <p className="text-center text-xl font-semibold">we visit</p>
                    <p className="text-center font-light opacity-80 text-sm">A expert house detailer will revive your home in a visit at your schedule</p>
                </div>
                <div className="flex flex-col gap-2 min-h-[200px] px-8 py-8 place-items-center rounded-[20px] rounded-br-[0px] bg-gradient-to-b from-[#000000] to-[#060B11] border-1 border-[#FFFFFF]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                    <p className="text-center text-5xl font-semibold bg-gradient-to-b from-[#3D8BC3] to-[#1A468E] bg-clip-text text-transparent">3</p>
                    <p className="text-center text-xl font-semibold">transaction</p>
                    <p className="text-center font-light opacity-80 text-sm">We only charge after the job is complete</p>
                </div>
            </div>
        </div>
    )
}