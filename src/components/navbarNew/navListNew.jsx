import {
    AiOutlineHome,
    AiOutlineDollarCircle,
    AiOutlineBell,
    AiOutlineSetting,
    AiOutlineStock,
    AiFillStar,
} from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { BiSolidUser } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { HiInformationCircle } from "react-icons/hi";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineIntegrationInstructions, MdOutlineGeneratingTokens } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { MdOutlineSettingsSuggest, MdHealthAndSafety } from "react-icons/md";

import { SideSubmenu } from "./sideSubmenu";

export const NavListMenuItems = [
    {
        id: "menu1",
        title: "Menu 1",
        Icon: <AiOutlineHome size={20} className='text-white' />,
        component: <div>Menu 1</div>,
        path: "menu1",
    },
    {
        id: "menu2",
        title: "Menu 2",
        Icon: <TfiWorld size={17} className='text-white' />,
        component: <div>Menu 2</div>,
        path: "menu2",
    },
    {
        id: "services",
        title: "Services",
        Icon: <AiOutlineDollarCircle size={20} className='text-white' />,
        component: <SideSubmenu />,
        path: "services",
    },
];

export const NavListFooterItems = [
    {
        id: "menu4",
        title: "Menu 4",
        Icon: (
            <div className='relative'>
                <BsDot size={40} className='text-red-600 absolute bottom-0' />
                <AiOutlineBell size={20} className='text-white' />
            </div>
        ),
        component: <div>Menu 4</div>,
        path: "menu4",
    },
    {
        id: "menu5",
        title: "Menu 5",
        Icon: <BiSolidUser size={20} className='text-white' />,
        component: <div>Menu 5</div>,
        path: "menu5",
    },
];

export const genericExpandedMenu = [
    {
        id: "chain_subMenu_1",
        title: "Sub menu 1",
        Icon: HiInformationCircle,
        path: "sub_menu_1",
        rootMenuId: "services",
    },
    {
        id: "chain_subMenu_2",
        title: "Sub menu 2",
        Icon: HiInformationCircle,
        path: "sub_menu_2",
        rootMenuId: "services",
    },
    {
        id: "chain_subMenu_3",
        title: "Sub menu 3",
        Icon: HiInformationCircle,
        path: "sub_menu_3",
        rootMenuId: "services",
    },
];

const productionExpandedMenu = [
    {
        id: "dashboard",
        title: "Dashboard",
        Icon: LuLayoutDashboard,
        path: "dashboard",
        rootMenuId: "services",
    },
    {
        id: "settings",
        title: "Settings",
        Icon: AiOutlineSetting,
        path: "settings",
        rootMenuId: "services",
    },
    {
        id: "api_integration",
        title: "API Integration",
        Icon: MdOutlineIntegrationInstructions,
        path: "integration",
        rootMenuId: "services",
    },
    {
        id: "tokens",
        title: "Tokens",
        Icon: MdOutlineGeneratingTokens,
        path: "tokens",
        rootMenuId: "services",
    },
    {
        id: "markets",
        title: "Markets",
        Icon: AiOutlineStock,
        path: "markets",
        rootMenuId: "services",
    },
    {
        id: "issue",
        title: "Issue",
        Icon: AiFillStar,
        path: "issue",
        rootMenuId: "services",
    },
];

export const ExpandableMenuItems = [
    {
        id: "chain",
        title: "Chain",
        children: genericExpandedMenu,
        rootMenuId: "services",
    },
    {
        id: "environment",
        title: "Environment",
        children: genericExpandedMenu,
        rootMenuId: "services",
    },
    {
        id: "production",
        title: "Production",
        children: productionExpandedMenu,
        rootMenuId: "services",
    },
];

export const FooterMenuItems = [
    {
        id: "teams",
        title: "Teams",
        Icon: FiUsers,
        path: "teams",
        rootMenuId: "services",
    },
    {
        id: "configure",
        title: "Configure",
        Icon: MdOutlineSettingsSuggest,
        path: "configure",
        rootMenuId: "services",
    },
    {
        id: "health",
        title: "Health",
        Icon: MdHealthAndSafety,
        path: "health",
        rootMenuId: "services",
    },
];
