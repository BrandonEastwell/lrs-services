import {lazy, StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import Layout from './Layout'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Landing from "./pages/Landing";

const rootElement = document.getElementById('root');

const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const ServicesDefault = lazy(() => import("./pages/ServicesDefault"));
const WindowCleaning = lazy(() => import("./pages/services/WindowCleaning"));
const PressureWashing = lazy(() => import("./pages/services/PressureWashing"));
const RoofCleaning = lazy(() => import("./pages/services/RoofCleaning"));
const RenderCleaning = lazy(() => import("./pages/services/RenderCleaning"));
const UPVCConservatory = lazy(() => import("./pages/services/UPVC&Conservatory"));
const GutterCleaning = lazy(() => import("./pages/services/GutterCleaning"));
const Contact = lazy(() => import("./pages/Contact"));
const Locations = lazy(() => import("./pages/Locations"));

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