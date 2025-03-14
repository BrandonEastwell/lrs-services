import {Link} from "react-router-dom";
export default function LearnMoreBtn({ href } : { href: string }) {
    return (
        <Link to={href}>
            <button className="bg-white border text-black py-2 px-6 rounded-full mr-4">
                Learn more
            </button>
        </Link>
    )
}