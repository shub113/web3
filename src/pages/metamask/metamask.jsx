import { Header } from "./header/header";
import { Body } from "./body/body";
import { MetaMaskContextProvider } from "../../hooks/useMetamask";

export function Metamask() {
    return (
        <div className='w-full'>
            <MetaMaskContextProvider>
                <Header />
                <Body />
            </MetaMaskContextProvider>
        </div>
    );
}
