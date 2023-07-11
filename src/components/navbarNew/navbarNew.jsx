import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { NavListMenuItems, NavListFooterItems } from "./navListNew";
import { NA } from "../index";

const menuItemsLength = NavListMenuItems?.length ?? 0;

export function NavbarNew() {
    const [selectedItem, setSelectedItem] = useState({
        menuIndex: 0,
        menuComponent: NavListMenuItems?.[0]?.component ?? <NA />,
    });

    return (
        <div className='w-[15rem] border-r-2 flex '>
            <div className='bg-red-950 w-[3.5rem]  min-h-screen overflow-auto py-1 pb-2'>
                <div className='flex flex-col justify-between items-center h-full '>
                    <div id='menu-items' className='w-full '>
                        {NavListMenuItems.map((item, index) => {
                            const menuItemClass = twMerge(
                                " py-3.5 my-3 w-full grid place-items-center cursor-pointer ",
                                selectedItem.menuIndex === index && "bg-red-800",
                                index === 0 && "mt-0"
                            );

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        setSelectedItem({ menuIndex: index, menuComponent: item.component });
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
                                selectedItem.menuIndex === index + menuItemsLength && "bg-red-800"
                            );

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        setSelectedItem({
                                            menuIndex: index + menuItemsLength,
                                            menuComponent: item.component,
                                        });
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
            <div id='sub-Menu' className='w-full overflow-auto'>
                {selectedItem.menuComponent}
            </div>
        </div>
    );
}
