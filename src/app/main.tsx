import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Layout from './Layout'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import About from "./pages/About";
import Services from "./pages/Services";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import Landing from "./pages/Landing";
import WindowCleaning from "./pages/services/WindowCleaning";
import PressureWashing from "./pages/services/PressureWashing";
import RenderCleaning from "./pages/services/RenderCleaning";
import RoofCleaning from "./pages/services/RoofCleaning";
import UPVCConservatory from "./pages/services/UPVC&Conservatory";
import GutterCleaning from "./pages/services/GutterCleaning";
import ServicesDefault from "./pages/ServicesDefault";

const rootElement = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Landing /> },
            { path: "whylrs", element: <About /> },
            { path: "services", element: <Services />,
                children: [
                    { index: true, element: <ServicesDefault /> },
                    { path: "windowcleaning", element: <WindowCleaning /> },
                    { path: "pressurewashing", element: <PressureWashing /> },
                    { path: "rendercleaning", element: <RenderCleaning /> },
                    { path: "roofcleaning", element: <RoofCleaning /> },
                    { path: "upvc&conservatory", element: <UPVCConservatory /> },
                    { path: "guttercleaning", element: <GutterCleaning /> }
                ]
            },
            { path: "contact", element: <Contact /> },
            { path: "locations", element: <Locations /> },
        ],
    },
]);

if (rootElement) {
    createRoot(rootElement).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>
    );
} else {
    console.error('Root element not found!');
}