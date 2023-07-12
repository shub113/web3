import { TbListDetails } from "react-icons/tb";

import { Card } from "../../../components/index";

const Button = ({ children }) => {
    return (
        <button className='border hover:bg-slate-200 justify-end w-20 rounded py-1 text-sm '>
            {children}
        </button>
    );
};

export function MainCard() {
    return (
        <div className=' mb-5'>
            <span className='text-red-900 font-semibold  '>Unlisted Equity Token </span>
            <Card>
                <div className='flex justify-start items-center gap-3 border-b-2 px-4 pb-2 my-3'>
                    <TbListDetails />
                    <span>Instrument Details</span>
                </div>
                <div className='grid grid-cols-3 gap-3 border-b-2 px-4 pb-2 my-3'>
                    <span className='mr-8'>Contact Address</span>
                    <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    <div />
                </div>
                <div className='grid grid-cols-3 gap-3 border-b-2 px-4 pb-2 my-3'>
                    <span className='mr-8'>Type</span>
                    <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    <div />
                </div>
                <div className='grid grid-cols-3 gap-3 border-b-2 px-4 pb-2 my-3'>
                    <span className='mr-8'>Status</span>
                    <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    <div />
                </div>
                <div className='grid grid-cols-3 place-items-start gap-3 border-b-2 px-4 pb-2 my-3'>
                    <span className='mr-8'>Supply</span>
                    <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    <Button>Transfer</Button>
                </div>
                <div className='grid grid-cols-3 place-items-start gap-3 border-b-2 px-4 pb-2 my-3'>
                    <span className='mr-8'>Mint</span>
                    <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    <Button>Mint</Button>
                </div>
                <div className='grid grid-cols-3 place-items-start gap-3 px-4 pb-2 my-3'>
                    <span className='mr-8'>Burn</span>
                    <div className='w-28 animate-pulse bg-slate-200 h-3 ' />
                    <Button>Burn</Button>
                </div>
            </Card>
        </div>
    );
}
