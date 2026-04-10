import { getEthereumProvider } from './getEthereumProvider';
import { getWalletClient } from './getWalletClient';

export const connectWallet = async (): Promise<`0x${string}`> => {
  const provider = getEthereumProvider();

  await provider.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xaa36a7' }],
  });

  await provider.request({
    method: 'eth_requestAccounts',
  });

  const walletClient = getWalletClient();
  const [account] = await walletClient.getAddresses();

  if (!account) throw new Error('No MetaMask account connected');

  return account;
};
