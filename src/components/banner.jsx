import { twMerge } from "tailwind-merge";

export function Banner({ children, type = "info", parentStyle = "" }) {
    const parentClass = twMerge(
        "border rounded-full py-2 px-4",
        parentStyle,
        type === "info" && "bg-blue-200  text-blue-900",
        type === "error" && "bg-red-200  text-red-900",
        type === "error" && "bg-green-200  text-green-900"
    );
    return <div className={parentClass}>{children}</div>;
}
