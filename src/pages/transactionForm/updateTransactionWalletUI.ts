import type { TransactionFormElements } from './transactionFormTypes';

const META_MASK_ICON = `
  <img
    class="metamask-icon"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1280px-MetaMask_Fox.svg.png"
    alt=""
    aria-hidden="true"
  />
`;

export const updateTransactionWalletUI = (
  elements: TransactionFormElements,
  connectedAccount: string,
) => {
  if (connectedAccount) {
    elements.connectButton.className = 'btn btn-connected';
    elements.connectButton.innerHTML = `Connected ${META_MASK_ICON}`;
    elements.connectButton.setAttribute('aria-label', 'MetaMask connected');

    elements.disconnectButton.style.display = 'inline-flex';
    elements.walletStatus.style.display = 'block';
    elements.walletStatus.textContent = connectedAccount;
    return;
  }

  elements.connectButton.className = 'btn btn-connect';
  elements.connectButton.innerHTML = `<span>Connect</span>${META_MASK_ICON}`;
  elements.connectButton.setAttribute('aria-label', 'Connect MetaMask');

  elements.disconnectButton.style.display = 'none';
  elements.walletStatus.style.display = 'none';
  elements.walletStatus.textContent = '';
};
