import { motion } from "framer-motion";
import {Link} from "react-router-dom";
export default function LearnMoreBtn({ href } : { href: string }) {
    return (
        <Link to={href}>
            <motion.a
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                className="bg-white border text-black py-2 px-6 rounded-full mr-4 cursor-pointer">
                Learn more
            </motion.a>
        </Link>
    )
}