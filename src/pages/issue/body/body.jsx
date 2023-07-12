import { SideCard } from "./sideCard";
import { MainCard } from "./mainCard";
import { LogCard } from "./logCard";

export function Body() {
    return (
        <div className='p-3 text-slate-500'>
            <div className='flex gap-5'>
                <div>
                    <MainCard />
                    <LogCard />
                </div>
                <SideCard />
            </div>
        </div>
    );
}
