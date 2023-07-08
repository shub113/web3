import { useState, useEffect, Fragment } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { AiFillCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

import { Button, Banner, Spinner } from "../../../components/index";
import { InputModal } from "./inputModal";
// import { formatBalance, formatChainAsNum } from "../../../modules/helper";

const initialWalletState = { accounts: [], balance: "", chainId: "" };

export const initialUserState = { name: "", email: "" };

export function Body() {
    const [hasProvider, setHasProvider] = useState(false);
    const [wallet, setWallet] = useState(initialWalletState);
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState(initialUserState);
    const [isConnecting, setIsConnecting] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const hasAccounts = (wallet?.accounts.length ?? 0) > 0;

    console.log("####", { wallet, user });

    useEffect(() => {
        const refreshAccounts = (accounts) => {
            if (accounts.length > 0) {
                updateWallet(accounts);
            } else {
                setWallet(initialWalletState);
            }
        };

        const refreshChain = (chainId) => {
            setWallet((prev) => ({ ...prev, chainId }));
        };

        const getProvider = async () => {
            const provider = await detectEthereumProvider({ silent: true });
            setHasProvider(Boolean(provider));

            if (provider) {
                const accounts = await window.ethereum.request({ method: "eth_accounts" });
                refreshAccounts(accounts);
                window.ethereum.on("accountsChanged", refreshAccounts);
                window.ethereum.on("chainChanged", refreshChain);
            }
        };

        getProvider();
        return () => {
            window.ethereum?.removeListener("accountsChanged", refreshAccounts);
            window.ethereum?.removeListener("chainChanged", refreshChain);
        };
    }, []);

    const updateWallet = async (accounts) => {
        const balance = await window?.ethereum?.request({
            method: "eth_getBalance",
            params: [accounts[0], "latest"],
        });
        const chainId = await window?.ethereum?.request({
            method: "eth_chainId",
        });
        setWallet({ accounts, balance, chainId });
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
                    Hi {user.name} ({user.email})
                    <div className='border-2 border-gray-400 rounded-xl p-3 my-3 bg-gray-300'>
                        {wallet.accounts.map((account) => (
                            <Fragment key={{ account }}> Account address : {account}</Fragment>
                        ))}
                        <div>Wallet Balance: {wallet.balance}</div> {/* New */}
                        <div>Hex ChainId: {wallet.chainId}</div> {/* New */}
                        <div>Numeric ChainId: {wallet.chainId}</div>
                    </div>
                </div>
            )}
        </div>
    );
}
