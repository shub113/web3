import { AiOutlineHome, AiOutlineDollarCircle, AiOutlineBell } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { BiSolidUser } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";

import { SideSubmenu } from "./sideSubmenu";

export const NavListMenuItems = [
    {
        id: "menu1",
        title: "Menu 1",
        Icon: <AiOutlineHome size={20} className='text-white' />,
        component: <div>Menu 1</div>,
    },
    {
        id: "menu2",
        title: "Menu 2",
        Icon: <TfiWorld size={17} className='text-white' />,
        component: <div>Menu 2</div>,
    },
    {
        id: "menu3",
        title: "Menu 3",
        Icon: <AiOutlineDollarCircle size={20} className='text-white' />,
        component: <SideSubmenu />,
    },
];

export const NavListFooterItems = [
    {
        id: "menu4",
        title: "PolygonScan",
        Icon: (
            <div className='relative'>
                <BsDot size={40} className='text-red-600 absolute bottom-0' />
                <AiOutlineBell size={20} className='text-white' />
            </div>
        ),
        component: <div>Menu 4</div>,
    },
    {
        id: "menu5",
        title: "PolygonScan",
        Icon: <BiSolidUser size={20} className='text-white' />,
        component: <div>Menu 5</div>,
    },
];

export const ChainSubMenu = [
    {
        id: "chain_subMenu_1",
        title: "Sub menu 1",
        Icon: HiInformationCircle,
    },
    {
        id: "chain_subMenu_2",
        title: "Sub menu 2",
        Icon: HiInformationCircle,
    },
    {
        id: "chain_subMenu_3",
        title: "Sub menu 3",
        Icon: HiInformationCircle,
    },
];
