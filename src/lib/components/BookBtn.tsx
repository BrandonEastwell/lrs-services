import { motion } from "framer-motion";
import {Link} from "react-router-dom";

export default function BookBtn({ href, innerHTML } : { href: string, innerHTML: string }) {
    return (
        <Link to={href} className="">
            <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="bg-[#3D8BC3] px-[1.6em] py-[0.6em] rounded-full border-1 border-[#3d8bc3]/4 shadow-[inset_0px_1px_0px_rgba(255,255,255,0.04)]">
                {innerHTML}
            </motion.a>
        </Link>

    )
}