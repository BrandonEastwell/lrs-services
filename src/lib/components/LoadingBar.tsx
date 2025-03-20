import NProgress from "nprogress";
import "nprogress/nprogress.css";
import {useEffect} from "react";

NProgress.configure({ showSpinner: false, trickleSpeed: 200 })

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