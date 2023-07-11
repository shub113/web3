import { useState } from "react";
import { AiFillAlipaySquare } from "react-icons/ai";
import { FaFlagUsa } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { ExpandableMenu } from "./expandableMenu";
import { ExpandableMenuItems } from "./navListNew";
import { FooterMenuItems } from "./navListNew";

export function SideSubmenu() {
    const [expanded, setExpanded] = useState({ id: "", state: false });
    const [selectedMenu, setSelectedMenu] = useState({ id: "" });

    return (
        <div className='text-slate-500  '>
            <div className='flex justify-center items-center w-full p-3 border-b-2'>
                <AiFillAlipaySquare size={20} className='text-red-900 mr-2' />
                <span className='text-red-900 font-semibold '>Oslo Services</span>
            </div>
            <div className='flex justify-between p-3 border-b-2'>
                <div>
                    <div className='text-sm'>Organization</div>
                    <div className='text-red-900 font-semibold'>ECM</div>
                </div>
                <div className='grid place-items-center'>
                    <FaFlagUsa size={20} className='text-red-900' />
                </div>
            </div>
            <div>
                {ExpandableMenuItems.map((menu) => {
                    return (
                        <ExpandableMenu
                            key={menu.id}
                            menu={menu}
                            expanded={expanded}
                            setExpanded={setExpanded}
                            selectedMenu={selectedMenu}
                            setSelectedMenu={setSelectedMenu}
                        />
                    );
                })}

                <div id='footer_side_menu' className='p-3'>
                    {FooterMenuItems.map(({ id, Icon, title }) => {
                        const subMenuClass = twMerge(
                            "flex justify-start items-center p-2 my-1 hover:bg-slate-300 cursor-pointer rounded-md",
                            selectedMenu.id === id && "bg-stone-400"
                        );
                        const iconClass = twMerge("mr-4", selectedMenu.id === id && "text-red-900");
                        const titleClass = twMerge(selectedMenu.id === id && "text-red-900");
                        return (
                            <div
                                onClick={() => {
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
            </div>
        </div>
    );
}
