import PressureWashing from "../../assets/portfolio/pressure.jpg";
import Conservatory from "../../assets/after/conservatory1.jpg"
import Gutter from "../../assets/after/gutter1.png"
import Roof from "../../assets/after/roof3.jpg"
import Render from "../../assets/portfolio/render.jpg"
import Window from "../../assets/portfolio/window.png"

export interface Service {
    id: string;
    name: string;
    number: string;
    description: string;
    image: any;
}

// Services data
const services = [
    {
        id: "window-cleaning",
        name: "Window Cleaning",
        number: "01",
        image: Window,
        description: "Enjoy streak-free, crystal-clear windows with our professional cleaning service. Using pure water technology, we remove grime and smudges for a flawless finish every time."
    },
    {
        id: "gutter-cleaning",
        name: "Gutter Cleaning",
        number: "02",
        image: Gutter,
        description: "Prevent blockages and water damage with our thorough gutter cleaning. We clear leaves, debris, and buildup to keep your gutters flowing properly and protect your home."
    },
    {
        id: "pressure-washing",
        name: "Pressure Washing",
        number: "03",
        image: PressureWashing,
        description: "Revitalize your property with our expert pressure washing services. We use advanced equipment and eco-friendly solutions for a deep, lasting clean. We perform under pressure."
    },
    {
        id: "roof-cleaning",
        name: "Roof Cleaning",
        number: "04",
        image: Roof,
        description: "Extend your roof’s lifespan with our safe and effective cleaning. We remove moss, algae, and stains using soft-washing techniques, enhancing both appearance and durability."
    },
    {
        id: "upvc-conservatory",
        name: "UPVC & Conservatory",
        number: "05",
        image: Conservatory,
        description: "Bring your conservatory back to life with our expert UPVC cleaning. We remove dirt, algae, and stains using gentle, eco-friendly solutions, restoring its original shine without damage."
    },
    {
        id: "render-cleaning",
        name: "Render Cleaning",
        number: "06",
        image: Render,
        description: "Restore your home’s exterior with our specialist render cleaning. We remove algae, dirt, and discoloration using gentle but effective techniques, keeping your property looking fresh."
    }
];

export {services}