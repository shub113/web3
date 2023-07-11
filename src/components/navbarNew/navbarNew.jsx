import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { NavListMenuItems, NavListFooterItems } from "./navListNew";

const menuItemsLength = NavListMenuItems?.length ?? 0;

export function NavbarNew() {
    const [selectedItem, setSelectedItem] = useState(0);

    return (
        <div className='bg-red-950 w-[3.5rem]  min-h-screen overflow-auto py-1'>
            <div className='flex flex-col justify-between items-center h-full '>
                <div id='menu-items' className='w-full '>
                    {NavListMenuItems.map((item, index) => {
                        const menuItemClass = twMerge(
                            " py-3.5 my-3 w-full grid place-items-center cursor-pointer ",
                            selectedItem === index && "bg-red-800",
                            index === 0 && "mt-0"
                        );

                        return (
                            <div
                                onClick={() => {
                                    setSelectedItem(index);
                                }}
                                className={menuItemClass}
                            >
                                {item.Icon}
                            </div>
                        );
                    })}
                </div>
                <div id='footer' className='w-full '>
                    {NavListFooterItems.map((item, index) => {
                        const menuItemClass = twMerge(
                            " py-3 w-full grid place-items-center cursor-pointer ",
                            selectedItem === index + menuItemsLength && "bg-red-800"
                        );

                        return (
                            <div
                                onClick={() => {
                                    setSelectedItem(index + menuItemsLength);
                                }}
                                className={menuItemClass}
                            >
                                {item.Icon}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
