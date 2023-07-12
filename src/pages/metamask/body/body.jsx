import { useState, useEffect } from "react";
import { AiFillCheckCircle, AiOutlineCopy } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

import { Button, Banner } from "../../../components/index";
import { InputModal } from "./inputModal";
import { useMetaMask } from "../../../hooks/useMetamask";
import { localStorageItems } from "../../../modules/constants";

export const initialUserState = { name: "", email: "" };

export function Body() {
    const { wallet, hasProvider } = useMetaMask();

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(initialUserState);

    const hasAccounts = (wallet?.accounts.length ?? 0) > 0;

    useEffect(() => {
        const name = localStorage.getItem(localStorageItems.NAME);
        const email = localStorage.getItem(localStorageItems.EMAIL);
        if (name && email) {
            setUser({ email, name });
        }
    }, []);

    return (
        <div className='py-3 px-12'>
            {showModal && <InputModal user={user} setUser={setUser} setShowModal={setShowModal} />}
            <Banner
                parentStyle='mb-4 flex items-center justify-start gap-3'
                type={hasProvider ? "info" : "error"}
            >
                {hasProvider ? <AiFillCheckCircle size={20} /> : <BiErrorCircle size={20} />}
                Browser does {hasProvider ? "" : "not"} have metamask extension.
            </Banner>
            {window.ethereum?.isMetaMask && !hasAccounts && (
                <Button
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Connect
                </Button>
            )}
            {hasAccounts && (
                <div className='mt-10'>
                    Hi {user.name} You wallet has a balance of{" "}
                    {(parseInt(wallet.balance) / 1000000000000000000).toFixed(2)}
                    {/* <div className='border-2 border-gray-400 rounded-xl p-3 my-3 bg-gray-300'>
                        {wallet.accounts.map((account) => (
                            <div className='flex items-center gap-4' key={{ account }}>
                                Account address : {account}
                                <AiOutlineCopy
                                    className='cursor-pointer'
                                    onClick={() => {
                                        navigator.clipboard.writeText(account);
                                    }}
                                    size={20}
                                />
                            </div>
                        ))}
                        <div>Wallet Balance: {wallet.balance}</div> 
                        <div>Hex ChainId: {wallet.chainId}</div> 
                        <div>Numeric ChainId: {wallet.chainId}</div>
                    </div> */}
                </div>
            )}
        </div>
    );
}
