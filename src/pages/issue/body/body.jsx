import { SideCard } from "./sideCard";
import { MainCard } from "./mainCard";
import { LogCard } from "./logCard";

export function Body() {
    return (
        <div className='p-3 text-slate-500 text-sm'>
            <div className='flex gap-5 my-8 ml-5'>
                <div className='w-3/5'>
                    <MainCard />
                    <LogCard />
                </div>
                <SideCard />
            </div>
        </div>
    );
}
