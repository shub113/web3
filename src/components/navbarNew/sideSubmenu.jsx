import { useState } from "react";
import { AiFillAlipaySquare } from "react-icons/ai";
import { FaFlagUsa } from "react-icons/fa";

import { ExpandableMenu } from "./expandableMenu";
import { ExpandableMenuItems } from "./navListNew";

export function SideSubmenu() {
    const [expanded, setExpanded] = useState({ id: "", state: false });

    return (
        <div className='text-slate-500'>
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
                        />
                    );
                })}
            </div>
        </div>
    );
}
