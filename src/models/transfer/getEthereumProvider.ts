import type { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export const getEthereumProvider = () => {
  if (!window.ethereum) throw new Error('MetaMask is not installed');

  return window.ethereum;
};
