import { useState, memo } from "react";
import { twMerge } from "tailwind-merge";

import { AiOutlineHome } from "react-icons/ai";
import { LiaBarsSolid } from "react-icons/lia";

import { NavItem } from "./navItem";
import { NavList } from "./navList";

function NavbarComponent() {
    const [isNavFixed, setIsNavFixed] = useState(false);

    const parentClass = twMerge("group relative h-screen w-[5rem] break-all", isNavFixed && "w-[15rem]");

    return (
        <div className={parentClass}>
            <div
                className='absolute h-full max-h-screen w-full max-w-[15rem] overflow-auto border-r-2 bg-pink-700 
            transition-[width] duration-300 ease-in-out @container hover:z-50 hover:w-[15rem]'
            >
                <div className='grid grid-cols-1 px-4 py-2 @3xs:grid-cols-[3rem_minmax(7rem,_1fr)]'>
                    <AiOutlineHome size={25} />
                    <div className='hidden items-center justify-end text-black @3xs:flex'>
                        <span className='mr-3'>Xalts</span>

                        <button
                            onClick={() => {
                                setIsNavFixed((prev) => !prev);
                            }}
                        >
                            <LiaBarsSolid size={25} />
                        </button>
                    </div>
                </div>
                <hr className='border-black' />
                <div className='bg-pink-700 @container'>
                    {NavList.map((navdata) => (
                        <NavItem key={navdata.id} navdata={navdata} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export const Navbar = memo(NavbarComponent);
