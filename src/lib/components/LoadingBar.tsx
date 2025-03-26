import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {useEffect} from "react";

NProgress.configure({ showSpinner: false, trickleSpeed: 100, speed: 500, easing: 'ease' })

export default function LoadingBar({isLoading} : {isLoading: boolean}) {
    useEffect(() => {
        if (isLoading) {
            NProgress.start(); // Start loading bar
        } else {
            NProgress.done(); // Finish loading bar
        }
    }, [isLoading]);

    return null
}