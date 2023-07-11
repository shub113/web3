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
        path: "services/dashboard",
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
        path: "menu4",
    },
    {
        id: "menu5",
        title: "PolygonScan",
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
        path: "services/sub_menu_1",
    },
    {
        id: "chain_subMenu_2",
        title: "Sub menu 2",
        Icon: HiInformationCircle,
        path: "sservices/ub_menu_2",
    },
    {
        id: "chain_subMenu_3",
        title: "services/Sub menu 3",
        Icon: HiInformationCircle,
        path: "services/sub_menu_3",
    },
];

const productionExpandedMenu = [
    {
        id: "dashboard",
        title: "Dashboard",
        Icon: LuLayoutDashboard,
        path: "services/dashboard",
    },
    {
        id: "settings",
        title: "Settings",
        Icon: AiOutlineSetting,
        path: "services/settings",
    },
    {
        id: "api_integration",
        title: "API Integration",
        Icon: MdOutlineIntegrationInstructions,
        path: "services/integration",
    },
    {
        id: "tokens",
        title: "Tokens",
        Icon: MdOutlineGeneratingTokens,
        path: "services/tokens",
    },
    {
        id: "markets",
        title: "Markets",
        Icon: AiOutlineStock,
        path: "services/markets",
    },
    {
        id: "issue",
        title: "Issue",
        Icon: AiFillStar,
        path: "services/issue",
    },
];

export const ExpandableMenuItems = [
    {
        id: "chain",
        title: "Chain",
        children: genericExpandedMenu,
    },
    {
        id: "environment",
        title: "Environment",
        children: genericExpandedMenu,
    },
    {
        id: "production",
        title: "Production",
        children: productionExpandedMenu,
    },
];

export const FooterMenuItems = [
    {
        id: "teams",
        title: "Teams",
        Icon: FiUsers,
        path: "services/teams",
    },
    {
        id: "configure",
        title: "Configure",
        Icon: MdOutlineSettingsSuggest,
        path: "services/configure",
    },
    {
        id: "health",
        title: "Health",
        Icon: MdHealthAndSafety,
        path: "services/health",
    },
];
