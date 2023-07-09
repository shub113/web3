import { WagmiConfig, createConfig, mainnet } from "wagmi";
import { createPublicClient, http } from "viem";

import { PageBody } from "./pageBody";
import { PageHeader } from "./pageHeader";

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
        chain: mainnet,
        transport: http(),
    }),
});

export function Polygonscan() {
    return (
        <WagmiConfig config={config}>
            <PageHeader />
            <PageBody />
        </WagmiConfig>
    );
}
