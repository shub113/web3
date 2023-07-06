import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { twMerge } from "tailwind-merge";

import { NA } from "../index";
import { AiOutlineFacebook } from "react-icons/ai";

export function NavItem({ navdata = {} }) {
    const { Icon = () => <NA style='inline-block py-1 px-2' />, title = <NA />, path = "/" } = navdata;

    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log(location);

    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const onMenuClick = () => {
        navigate(path);
    };

    const onExpand = () => {
        setIsMenuExpanded((prev) => !prev);
    };

    const menuItemClass = twMerge("px-4 py-2", path === pathname && "bg-pink-400 rounded-lg");

    return (
        <>
            <div className={`grid grid-cols-1 px-2 py-2 @3xs:grid-cols-[minmax(7rem,_1fr)_1rem]`}>
                <div className={menuItemClass}>
                    <div className='flex cursor-pointer items-center justify-between' onClick={onMenuClick}>
                        <Icon size={25} />
                        <span className='hidden @3xs:inline-block'>{title}</span>
                    </div>

                    {navdata.children && (
                        <div className='hidden cursor-s-resize place-items-center @3xs:grid'>
                            <AiOutlineFacebook onClick={onExpand} />
                        </div>
                    )}
                </div>
            </div>

            {isMenuExpanded &&
                navdata.children.map((data) => <NavItem key={data?.id ?? uuidv4()} navdata={data} />)}
        </>
    );
}
