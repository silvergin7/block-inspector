import CreateDOM from '../helpers/CreateDOM';
import Transfer from '../models/Transfer';
import { bindTransactionFormEvents } from './transactionForm/bindTransactionFormEvents';
import { createTransactionFormElements } from './transactionForm/createTransactionFormElements';
import type { TransactionFormState } from './transactionForm/transactionFormTypes';
import { updateTransactionWalletUI } from './transactionForm/updateTransactionWalletUI';

const panel = document.querySelector('#send-transaction') as HTMLDivElement;

export const renderTransactionForm = () => {
  const dom = new CreateDOM();
  const transfer = new Transfer();
  const state: TransactionFormState = { connectedAccount: '' };
  const elements = createTransactionFormElements();

  const refreshWalletUI = () => {
    updateTransactionWalletUI(elements, state.connectedAccount);
  };

  bindTransactionFormEvents(elements, transfer, state, refreshWalletUI);

  elements.wrapper.appendChild(dom.build({ type: 'h2', content: 'Send Transaction' }));
  elements.buttonRow.appendChild(elements.connectButton);
  elements.buttonRow.appendChild(elements.disconnectButton);

  elements.toRow.appendChild(elements.toInput);
  elements.toRow.appendChild(elements.clearToButton);

  elements.amountRow.appendChild(elements.amountInput);
  elements.amountRow.appendChild(elements.clearAmountButton);

  elements.wrapper.appendChild(elements.buttonRow);
  elements.wrapper.appendChild(elements.walletStatus);
  elements.wrapper.appendChild(elements.toLabel);
  elements.wrapper.appendChild(elements.toRow);
  elements.wrapper.appendChild(elements.amountLabel);
  elements.wrapper.appendChild(elements.amountRow);
  elements.wrapper.appendChild(elements.sendButton);
  elements.wrapper.appendChild(elements.output);

  refreshWalletUI();
  panel.appendChild(elements.wrapper);
};
