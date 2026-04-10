import { isAddress, parseEther } from 'viem';
import { connectWallet } from './transfer/connectWallet';
import { getWalletClient } from './transfer/getWalletClient';

export default class Transfer {
  from: string;
  to: string;
  amount: string;

  constructor() {
    this.from = '';
    this.to = '';
    this.amount = '';
  }

  async connectWallet(): Promise<`0x${string}`> {
    const account = await connectWallet();
    this.from = account;
    return account;
  }

  async sendTransaction(to: string, amount: string): Promise<string> {
    if (!this.from) throw new Error('Connect MetaMask first');
    if (!isAddress(to)) throw new Error('Invalid Ethereum address');

    const walletClient = getWalletClient();

    const hash = await walletClient.sendTransaction({
      account: this.from as `0x${string}`,
      to: to as `0x${string}`,
      value: parseEther(amount),
    });

    this.to = to;
    this.amount = amount;

    return hash;
  }
}
