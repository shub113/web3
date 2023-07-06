import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { NA } from "../index";
import { AiOutlineFacebook } from "react-icons/ai";

export function NavItem({ navdata = {} }) {
    const {
        Icon = () => <NA style='inline-block py-1 px-2' />,
        title = <NA />,
        relativePath = "/",
    } = navdata;
    console.log(navdata);
    const navigate = useNavigate();

    const [isMenuExpanded, setIsMenuExpanded] = useState(false);

    const onMenuClick = () => {
        navigate(relativePath);
    };

    const onExpand = () => {
        setIsMenuExpanded((prev) => !prev);
    };

    return (
        <>
            <div className='grid grid-cols-1 px-4 py-2 @3xs:grid-cols-[minmax(7rem,_1fr)_1rem]'>
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
            {isMenuExpanded &&
                navdata.children.map((data) => <NavItem key={data?.id ?? uuidv4()} navdata={data} />)}
        </>
    );
}
