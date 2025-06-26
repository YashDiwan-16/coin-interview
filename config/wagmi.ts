import { http, createConfig } from "wagmi";
import { baseSepolia, mainnet, sepolia } from "wagmi/chains";
import { injected, metaMask, safe } from "wagmi/connectors";

export const config = createConfig({
  chains: [ mainnet,baseSepolia],
  connectors: [ metaMask()],
  transports: {
    [mainnet.id]: http(),
    [baseSepolia.id]: http(),
  },
});