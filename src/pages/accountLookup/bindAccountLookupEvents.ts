import WalletAccount from '../../models/WalletAccount';
import type { AccountLookupElements } from './accountLookupTypes';

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return 'Something went wrong';
};

export const bindAccountLookupEvents = (elements: AccountLookupElements) => {
  elements.clearButton.addEventListener('click', () => {
    elements.input.value = '';
    elements.output.textContent = '';
  });

  elements.button.addEventListener('click', async () => {
    try {
      const balance = await new WalletAccount().getBalance(elements.input.value.trim());
      elements.output.textContent = `Balance: ${balance} ETH`;
    } catch (error) {
      elements.output.textContent = getErrorMessage(error);
    }
  });
};
