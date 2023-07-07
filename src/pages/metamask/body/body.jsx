import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

import { Button, Banner } from "../../../components/index";
import { InputModal } from "./inputModal";

const initialWalletState = { accounts: [] };

export const initialUserState = { name: "", email: "" };

export function Body() {
    const [hasProvider, setHasProvider] = useState(false);
    const [wallet, setWallet] = useState(initialWalletState);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(initialUserState);

    const hasAccounts = (wallet?.accounts.length ?? 0) > 0;

    console.log("####", { wallet, user });

    useEffect(() => {
        const refreshAccounts = (accounts) => {
            if (accounts.length > 0) {
                updateWallet(accounts);
            } else {
                // if length 0, user is disconnected
                setWallet(initialWalletState);
            }
        };
        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            setHasProvider(Boolean(provider));
        };

        getProvider();
    }, []);

    const updateWallet = async (accounts) => {
        setWallet({ accounts });
    };

    return (
        <div className='py-3 px-12'>
            {showModal && (
                <InputModal
                    user={user}
                    setUser={setUser}
                    updateWallet={updateWallet}
                    setShowModal={setShowModal}
                />
            )}
            <Banner
                parentStyle='mb-4 flex items-center justify-start gap-3'
                type={hasProvider ? "info" : "error"}
            >
                {hasProvider ? <AiFillCheckCircle size={20} /> : <BiErrorCircle size={20} />}
                Browser does {hasProvider ? "" : "not"} have metamask extension.
            </Banner>
            {hasProvider && (
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
                    Hi {user.name} ({user.email})
                    {wallet.accounts.map((account) => (
                        <div
                            key={account}
                            className='border-2 border-gray-400 rounded-xl p-3 my-3 bg-gray-300'
                        >
                            Account address : {account}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
