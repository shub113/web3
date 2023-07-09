import { useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { AiOutlineCopy } from "react-icons/ai";

import { Button } from "../../components/index";
import { ConnectionModal } from "./connectionModal";

export function PageBody() {
    const [showModal, setShowModal] = useState(false);
    const [balance, setBalance] = useState("");
    const { address } = useAccount();
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    });
    const { disconnect } = useDisconnect();

    return (
        <div className='grid place-items-center min-h-screen'>
            {showModal && <ConnectionModal setShowModal={setShowModal} setBalance={setBalance} />}
            {!address && (
                <div>
                    <Button buttonStyle='mb-3' onClick={() => setShowModal(true)}>
                        Connect via address
                    </Button>

                    <Button onClick={connect}>Connect to metamask </Button>
                </div>
            )}

            {address && (
                <div className='grid place-items-center'>
                    <div className='border-2 border-gray-400 rounded-xl p-3 my-3 bg-gray-300'>
                        <div className='flex items-center gap-4'>
                            Account address : {address}
                            <AiOutlineCopy
                                className='cursor-pointer'
                                onClick={() => {
                                    navigator.clipboard.writeText(address);
                                }}
                                size={20}
                            />
                        </div>
                        {balance && <div>Balance : {balance}</div>}
                    </div>
                    <Button onClick={disconnect}>Disconnect</Button>
                </div>
            )}
        </div>
    );
}
