import { createPublicClient, http } from "viem";
import { sepolia } from "viem/chains";

const url = import.meta.env.VITE_BASE_URL;

const viemClient = createPublicClient({
  chain: sepolia,
  transport: http(url),
});

export default viemClient;
