import { twMerge } from "tailwind-merge";

export function NA({ style = "" }) {
    const styleClass = twMerge("rounded-full bg-black px-2 py-0.5 text-sm font-light text-white", style);
    return <div className={styleClass}>N/A</div>;
}
