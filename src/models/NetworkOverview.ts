import viemClient from '../helpers/viemClient';
import { IChainClient } from '../interfaces/IChainClient';

export default class NetworkOverview implements IChainClient<bigint> {
  blockHeight: bigint;

  constructor() {
    this.blockHeight = 0n;
  }

  async fetch(): Promise<bigint> {
    this.blockHeight = await viemClient.getBlockNumber();
    return this.blockHeight;
  }

  async getBlockHeight(): Promise<bigint> {
    return this.fetch();
  }
}
