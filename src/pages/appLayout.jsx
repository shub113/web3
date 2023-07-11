import { Outlet } from "react-router-dom";

import { NavbarNew } from "../components/index";

export function AppLayout() {
    return (
        <div className='min-h-screen'>
            <div className='flex'>
                <NavbarNew />

                {/* <div className='bg-pink-100 grow'>
                    <Outlet />
                </div> */}
            </div>
        </div>
    );
}
