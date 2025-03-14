import FAQCard from "./FAQCard";
import {useState} from "react";

interface FAQs {
    id: number
    question: string
    answer: string
}

export default function FAQSection( {faqs} : {faqs: FAQs[]}  ) {

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    function toggleFAQ(FAQ: number) {
        if (openFAQ === FAQ) {
            setOpenFAQ(null);
        } else {
            setOpenFAQ(FAQ);
        }
    }

    return (
        <>
            <h2 className="text-3xl font-bold mb-7">Frequently asked questions</h2>
            <div className="space-y-2">
                {faqs.map((faq) => (
                    <FAQCard key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} openFAQ={openFAQ} onToggle={() => toggleFAQ(faq.id)} />
                ))}
            </div>
        </>
    )
}