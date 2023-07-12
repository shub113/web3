import { twMerge } from "tailwind-merge";

export function Card({ children, styleCard = "", ...rest }) {
    const cardClass = twMerge("w-full bg-white border rounded shadow-2xl ", styleCard);

    return (
        <div className={cardClass} {...rest}>
            {children}
        </div>
    );
}
