import CreateDOM from '../../helpers/CreateDOM';
import type { TransactionFormElements } from './transactionFormTypes';

const createInput = (dom: CreateDOM, placeholder: string) => {
  return dom.build({
    type: 'input',
    classes: 'address-input',
    attribute: { name: 'placeholder', value: placeholder },
  }) as HTMLInputElement;
};

const createClearButton = (dom: CreateDOM) => {
  return dom.build({
    type: 'button',
    content: 'X',
    classes: 'clear-btn',
  }) as HTMLButtonElement;
};

export const createTransactionFormElements = (): TransactionFormElements => {
  const dom = new CreateDOM();

  const wrapper = dom.build({ type: 'div', classes: 'info-card' }) as HTMLDivElement;
  const buttonRow = dom.build({ type: 'div', classes: 'wallet-actions' }) as HTMLDivElement;

  const connectButton = dom.build({
    type: 'button',
    classes: 'btn btn-connect',
  }) as HTMLButtonElement;

  const disconnectButton = dom.build({
    type: 'button',
    content: 'Disconnect',
    classes: 'btn btn-disconnect',
  }) as HTMLButtonElement;

  const walletStatus = dom.build({
    type: 'p',
    classes: 'wallet-status',
  }) as HTMLParagraphElement;

  const toLabel = dom.build({
    type: 'label',
    content: 'To address',
  }) as HTMLLabelElement;

  const toRow = dom.build({ type: 'div', classes: 'input-row' }) as HTMLDivElement;
  const toInput = createInput(dom, '0x...');
  const clearToButton = createClearButton(dom);

  const amountLabel = dom.build({
    type: 'label',
    content: 'Amount (ETH)',
  }) as HTMLLabelElement;

  const amountRow = dom.build({ type: 'div', classes: 'input-row' }) as HTMLDivElement;
  const amountInput = createInput(dom, 'Amount in ETH');
  const clearAmountButton = createClearButton(dom);

  const output = dom.build({
    type: 'p',
    classes: 'output-text',
  }) as HTMLParagraphElement;

  const sendButton = dom.build({
    type: 'button',
    content: 'Send',
    classes: 'btn',
  }) as HTMLButtonElement;

  connectButton.type = 'button';
  disconnectButton.type = 'button';
  clearToButton.type = 'button';
  clearAmountButton.type = 'button';
  sendButton.type = 'button';

  disconnectButton.style.display = 'none';

  toLabel.setAttribute('for', 'to-address');
  amountLabel.setAttribute('for', 'amount');

  toInput.id = 'to-address';
  toInput.name = 'toAddress';
  toInput.type = 'text';
  toInput.autocomplete = 'off';

  amountInput.id = 'amount';
  amountInput.name = 'amount';
  amountInput.type = 'text';
  amountInput.inputMode = 'decimal';
  amountInput.autocomplete = 'off';

  return {
    wrapper,
    buttonRow,
    connectButton,
    disconnectButton,
    walletStatus,
    toLabel,
    toRow,
    toInput,
    clearToButton,
    amountLabel,
    amountRow,
    amountInput,
    clearAmountButton,
    sendButton,
    output,
  };
};
