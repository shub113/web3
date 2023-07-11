import { memo } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

import { NA } from "../index";

export const ExpandableMenu = memo(({ menu, expanded, setExpanded, selectedMenu, setSelectedMenu }) => {
    const navigate = useNavigate();
    return (
        <div className='p-3 border-b-2'>
            <div
                onClick={() => {
                    if (expanded.id === menu.id) {
                        setExpanded((prev) => ({ id: menu.id, state: !prev.state }));
                        return;
                    }
                    setExpanded({ id: menu.id, state: true });
                    setSelectedMenu({ id: "" });
                }}
                className='flex items-center justify-between cursor-pointer'
            >
                <span>{menu?.title ?? <NA />}</span>
                {expanded.id === menu.id && expanded.state ? (
                    <IoIosArrowUp size={20} />
                ) : (
                    <IoIosArrowDown size={20} />
                )}
            </div>

            {expanded.id === menu.id && expanded.state && (
                <div className='mt-4'>
                    {menu.children.map(({ id, Icon, title, path }) => {
                        const subMenuClass = twMerge(
                            "flex justify-start items-center p-2 my-1 hover:bg-stone-300 cursor-pointer rounded-md",
                            selectedMenu.id === id && "bg-stone-400"
                        );
                        const iconClass = twMerge("mr-4", selectedMenu.id === id && "text-red-900");
                        const titleClass = twMerge(selectedMenu.id === id && "text-red-900");
                        return (
                            <div
                                onClick={() => {
                                    navigate(path);
                                    setSelectedMenu({ id });
                                }}
                                key={id}
                                className={subMenuClass}
                            >
                                <Icon size={20} className={iconClass} />
                                <span className={titleClass}>{title}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
});
