export interface IChainClient<T> {
  fetch(): Promise<T>;
}

