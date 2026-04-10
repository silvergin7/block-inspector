import { renderChainInfo } from './renderChainInfo';
import { renderAccountLookup } from './renderAccountLookup';
import { renderTransactionForm } from './renderTransactionForm';

const initApp = async () => {
  try {
    await renderChainInfo();
  } catch (error) {
    console.error('Could not load chain info:', error);
  }

  renderAccountLookup();
  renderTransactionForm();
};

document.addEventListener('DOMContentLoaded', initApp);
