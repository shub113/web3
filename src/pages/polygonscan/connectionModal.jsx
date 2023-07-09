import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Button, Modal, Input, Spinner, NA } from "../../components/index";

export function ConnectionModal({ setShowModal, setBalance }) {
    const [address, setAddress] = useState("");
    const [error, setError] = useState("");
    const [isConnecting, setIsConnecting] = useState(false);
    const [connectionError, setConnectionError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleConnect = async () => {
        if (connectionError) {
            setConnectionError(false);
        }
        if (!address) {
            setError("Address cannot be empty!");
            return;
        }
        setIsConnecting(true);
        await fetch(
            `https://api.polygonscan.com/api
        ?module=account
        &action=balance
        &address=${address}
        &apikey=${import.meta.env.VITE_PLOYSCAN_API_KEY}`,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                setConnectionError(true);
                if ((res?.status ?? "0") === "0") {
                    setErrorMessage(res?.result ?? "Error");
                    return;
                }
                setBalance(res?.result ?? <NA />);
                setShowModal(false);
            })
            .catch((err) => {
                setConnectionError(true);
                setErrorMessage(err.message);
            });
        setIsConnecting(false);
    };

    return (
        <Modal>
            <div className='grid gap-4 overflow-auto'>
                <div className='relative '>
                    <div className='font-bold text-xl grid place-items-center mb-5'>Enter Details</div>
                    <div className='absolute right-0 top-0 '>
                        <AiOutlineClose
                            onClick={() => setShowModal(false)}
                            className='cursor-pointer'
                            size={25}
                        />
                    </div>
                    {isConnecting && (
                        <div className='grid place-items-center'>
                            <Spinner />
                        </div>
                    )}
                </div>
                <div className='flex gap-3 items-center  '>
                    ADDRESS :
                    <Input
                        name='email'
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                        value={address}
                        errorText={error}
                    />
                </div>
                <div className='flex justify-between '>
                    <Button
                        buttonStyle='w-40 mt-5 mr-3'
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        // disabled={address === ""}
                        buttonStyle='bg-green-500 hover:bg-green-700 w-40 mt-5'
                        onClick={handleConnect}
                    >
                        Connect
                    </Button>
                </div>
                {connectionError && (
                    <div className='text-red-700'>
                        <strong>Connection error:</strong> {errorMessage}
                    </div>
                )}
            </div>
        </Modal>
    );
}
