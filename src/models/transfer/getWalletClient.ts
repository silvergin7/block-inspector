import { createWalletClient, custom } from 'viem';
import { sepolia } from 'viem/chains';
import { getEthereumProvider } from './getEthereumProvider';

export const getWalletClient = () => {
  return createWalletClient({
    chain: sepolia,
    transport: custom(getEthereumProvider()),
  });
};
