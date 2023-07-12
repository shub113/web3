import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { useNavigate, useLocation } from "react-router-dom";

import { NavListMenuItems, NavListFooterItems } from "./navListNew";
import { NA } from "../index";

export function NavbarNew() {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const [selectedItem, setSelectedItem] = useState({
        id: NavListMenuItems?.[0]?.id,
        menuComponent: NavListMenuItems?.[0]?.component ?? <NA />,
    });

    useEffect(() => {
        const pathArray = pathname.split("/");
        let selectedItem = NavListMenuItems.filter((item) => {
            if (pathArray[2]) {
                return item.path === `${pathArray?.[1]}/${pathArray?.[2]}`;
            }

            return item.path === pathArray?.[1];
        });
        if (selectedItem.length === 0) {
            selectedItem = NavListFooterItems.filter((item) => item.path === pathArray?.[1]);
        }
        setSelectedItem({ id: selectedItem?.[0]?.id, menuComponent: selectedItem?.[0]?.component });
    }, []);

    return (
        <div className='w-[15rem] border-r-2 flex '>
            <div className='bg-red-950 w-[3.5rem]  min-h-screen overflow-auto py-1 pb-2'>
                <div className='flex flex-col justify-between items-center h-full '>
                    <div id='menu-items' className='w-full '>
                        {NavListMenuItems.map((item, index) => {
                            const menuItemClass = twMerge(
                                " py-3.5 my-3 w-full grid place-items-center cursor-pointer ",
                                selectedItem.id === item.id && "bg-red-800",
                                index === 0 && "mt-0"
                            );

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        navigate(item.path);
                                        setSelectedItem({ id: item.id, menuComponent: item.component });
                                    }}
                                    className={menuItemClass}
                                >
                                    {item.Icon}
                                </div>
                            );
                        })}
                    </div>
                    <div id='footer' className='w-full '>
                        {NavListFooterItems.map((item) => {
                            const menuItemClass = twMerge(
                                " py-3 w-full grid place-items-center cursor-pointer ",
                                selectedItem.id === item.id && "bg-red-800"
                            );

                            return (
                                <div
                                    key={item.id}
                                    onClick={() => {
                                        navigate(item.path);
                                        setSelectedItem({
                                            id: item.id,
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
