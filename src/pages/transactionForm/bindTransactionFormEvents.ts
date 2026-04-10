import Transfer from '../../models/Transfer';
import type { TransactionFormElements, TransactionFormState } from './transactionFormTypes';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return 'Something went wrong';
};

export const bindTransactionFormEvents = (
  elements: TransactionFormElements,
  transfer: Transfer,
  state: TransactionFormState,
  updateWalletUI: () => void,
) => {
  elements.clearToButton.addEventListener('click', () => {
    elements.toInput.value = '';
    elements.output.textContent = '';
  });

  elements.clearAmountButton.addEventListener('click', () => {
    elements.amountInput.value = '';
    elements.output.textContent = '';
  });

  elements.connectButton.addEventListener('click', async () => {
    if (state.connectedAccount) return;

    try {
      const account = await transfer.connectWallet();
      state.connectedAccount = account;
      updateWalletUI();
      elements.output.textContent = '';
    } catch (error) {
      state.connectedAccount = '';
      transfer.from = '';
      updateWalletUI();
      elements.output.textContent = getErrorMessage(error);
    }
  });

  elements.disconnectButton.addEventListener('click', () => {
    state.connectedAccount = '';
    transfer.from = '';
    updateWalletUI();
    elements.output.textContent = '';
  });

  elements.sendButton.addEventListener('click', async () => {
    if (!state.connectedAccount) {
      elements.output.textContent = 'Connect MetaMask first';
      return;
    }

    try {
      transfer.from = state.connectedAccount;

      const hash = await transfer.sendTransaction(
        elements.toInput.value.trim(),
        elements.amountInput.value.trim(),
      );

      elements.toInput.value = '';
      elements.amountInput.value = '';

      elements.output.innerHTML = `Transaction hash: <a href="https://sepolia.etherscan.io/tx/${hash}" target="_blank">View on Etherscan</a>`;
    } catch (error) {
      elements.output.textContent = getErrorMessage(error);
    }
  });
};
