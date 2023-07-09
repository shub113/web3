import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Navbar } from "../components/index";
import { NavList } from "../components/index";

export function AppLayout() {
    const navigate = useNavigate();

    useEffect(() => {
        // navigate(NavList?.[0]?.path ?? "/");
    }, []);

    return (
        <div className='min-h-screen'>
            <div className='flex'>
                <Navbar />

                <div className='bg-pink-100 grow'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
