import { FaBuildingColumns } from "react-icons/fa6";
import { GoBriefcase } from "react-icons/go";
import { SlDocs } from "react-icons/sl";
import { MdOutlineCases } from "react-icons/md";

import { Card } from "../../../components/index";

export function SideCard() {
    return (
        <div className='w-2/5 mr-10 mt-5'>
            <Card>
                <div>
                    <div className='border-b-2 py-4 px-6 '>Off Chain</div>
                    <div className='flex gap-5 border-b-2 py-4 px-6 '>
                        <FaBuildingColumns />
                        <div>
                            Legal
                            <div className='w-28 animate-pulse bg-slate-200 h-2 mb-1 ' />
                            <div className='w-28 animate-pulse bg-slate-200 h-2' />
                        </div>
                    </div>
                    <div className='flex gap-5 border-b-2 py-4 px-6 '>
                        <MdOutlineCases />
                        <div>
                            Docs
                            <div className='w-28 animate-pulse bg-slate-200 h-2 mb-1 ' />
                            <div className='w-28 animate-pulse bg-slate-200 h-2 ' />
                        </div>
                    </div>
                    <div className='flex gap-5 border-b-2 py-4 px-6 '>
                        <SlDocs />
                        <div>
                            Prospectus
                            <div className='w-28 animate-pulse bg-slate-200 h-2 mb-1 ' />
                            <div className='w-28 animate-pulse bg-slate-200 h-2 ' />
                        </div>
                    </div>
                    <div className='flex gap-5 border-b-2 py-4 px-6 '>
                        <GoBriefcase />
                        <div>
                            Custodian
                            <div className='w-28 animate-pulse bg-slate-200 h-2 mb-1 ' />
                            <div className='w-28 animate-pulse bg-slate-200 h-2 ' />
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    );
}
