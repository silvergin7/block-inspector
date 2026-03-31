import { parseEther, isAddress, createWalletClient, http, custom } from "viem";
import { sepolia } from "viem/chains";
import type { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default class Transfer {
  from: string;
  to: string;
  amount: string;

  constructor() {
    this.from = "";
    this.to = "";
    this.amount = "";
  }

  async sendTransaction(from: string, to: string, amount: string): Promise<string> {
    if (!isAddress(from) || !isAddress(to)) throw new Error('Invalid Ethereum address');
    if (!window.ethereum) throw new Error('MetaMask is not installed');

    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0xaa36a7' }],
    });

    const walletClient = createWalletClient({
      chain: sepolia,
      transport: custom(window.ethereum),
    });

    const hash = await walletClient.sendTransaction({
      account: from as `0x${string}`,
      to: to as `0x${string}`,
      value: parseEther(amount),
    });

    this.from = from;
    this.to = to;
    this.amount = amount;

    return hash;
  }
}