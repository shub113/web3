import { AiOutlineUser } from "react-icons/ai";

export function Header() {
    return (
        <div>
            <div className='flex justify-end items-center py-3 px-12'>
                <div className='bg-white flex justify-between items-center p-3 rounded-md'>
                    <AiOutlineUser />
                    <span className='ml-6'> Tine Li / 0x98324989</span>
                </div>
            </div>
            <hr className='border-black' />
        </div>
    );
}
