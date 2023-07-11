import { AiOutlineHome, AiOutlineDollarCircle, AiOutlineBell } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { BiSolidUser } from "react-icons/bi";
import { BsDot } from "react-icons/bs";

export const NavListMenuItems = [
    {
        id: "menu1",
        title: "Home",
        Icon: <AiOutlineHome size={20} className='text-white' />,
        path: "/metamask",
    },
    {
        id: "menu2",
        title: "Currency",
        Icon: <TfiWorld size={17} className='text-white' />,
        path: "/polygonScan",
    },
    {
        id: "menu3",
        title: "Services",
        Icon: <AiOutlineDollarCircle size={20} className='text-white' />,
        path: "/polygonScan",
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
        path: "/polygonScan",
    },
    {
        id: "menu5",
        title: "PolygonScan",
        Icon: <BiSolidUser size={20} className='text-white' />,
        path: "/polygonScan",
    },
];
