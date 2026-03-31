import { formatEther, isAddress } from "viem";
import viemClient from "../helpers/viemClient";

export default class WalletAccount {
  address: string;
  balance: string;

  constructor() {
    this.address = "";
    this.balance = "";
  }

  async getBalance(address: string): Promise<string> {
    if (!isAddress(address)) throw new Error("Invalid Ethereum address");

    const raw = await viemClient.getBalance({
      address: address as `0x${string}`,
    });
    this.address = address;
    this.balance = formatEther(raw);
    return this.balance;
  }
}
