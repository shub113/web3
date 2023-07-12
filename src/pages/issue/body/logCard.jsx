import { BiSolidUserCircle } from "react-icons/bi";

import { Card } from "../../../components/index";

export function LogCard() {
    return (
        <div>
            <Card>
                <div className='py-5'>
                    <span className='px-5'>Log</span>
                    <div className='grid grid-cols-3 gap-5 border-b-2 px-5 py-3 '>
                        <BiSolidUserCircle size={20} />
                        <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                        <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    </div>
                    <div className='grid grid-cols-3 gap-5  px-5 pt-3'>
                        <BiSolidUserCircle size={20} />
                        <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                        <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    </div>
                </div>
            </Card>
        </div>
    );
}
