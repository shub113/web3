import { useState, useLayoutEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

import { Button, Modal, Input } from "../../../components/index";
import { isValidEmail, isValidName } from "../../../modules/helper";
import { initialUserState } from "./body";

export function InputModal({ user, setUser, updateWallet, setShowModal }) {
    const [error, setError] = useState(initialUserState);
    const [isConnecting, setIsConnecting] = useState(false); /* New */
    const [connectionError, setConnectionError] = useState(false); /* New */
    const [errorMessage, setErrorMessage] = useState(""); /* New */

    useLayoutEffect(() => {
        setUser(initialUserState);
    }, []);

    const onEmailBlur = (event) => {
        if (!isValidEmail(event.target.value)) {
            setError((prev) => ({ ...prev, email: "Invalid email" }));
        }
    };

    const onNameBlur = (event) => {
        if (!isValidName(event.target.value)) {
            setError((prev) => ({ ...prev, name: "Enter first and last name, with space separated!" }));
        }
    };

    const onChange = (event) => {
        setError((prev) => ({ ...prev, [event.target.name]: "" }));
        setUser((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleConnect = async () => {
        if (error.email !== "" || error.name !== "") {
            return;
        }
        setIsConnecting(true);
        await window.ethereum
            .request({
                method: "eth_requestAccounts",
            })
            .then((accounts) => {
                setConnectionError(false);
                updateWallet(accounts);
            })
            .catch((err) => {
                setConnectionError(true);
                setErrorMessage(err.message);
            });
        setIsConnecting(false);
    };

    return (
        <Modal>
            <div className='grid gap-4 '>
                <div className='relative '>
                    <div className='font-bold text-xl grid place-items-center mb-5'>Enter Details</div>
                    <div className='absolute right-0 top-0 '>
                        <AiOutlineClose
                            onClick={() => setShowModal(false)}
                            className='cursor-pointer'
                            size={25}
                        />
                    </div>
                </div>
                <div className='flex gap-3 items-center  '>
                    EMAIL :
                    <Input
                        name='email'
                        onChange={onChange}
                        value={user?.email}
                        errorText={error?.email}
                        onBlur={onEmailBlur}
                    />
                </div>
                <div className='flex gap-3 items-center  '>
                    Name :{" "}
                    <Input
                        name='name'
                        onChange={onChange}
                        value={user?.name}
                        errorText={error?.name}
                        onBlur={onNameBlur}
                    />
                </div>
                <div className='flex justify-between '>
                    <Button
                        buttonStyle='w-40 mt-5'
                        onClick={() => {
                            setShowModal(false);
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        disabled={
                            error.email !== "" || error.name !== "" || user.email === "" || user.name === ""
                        }
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
