import CreateDOM from '../../helpers/CreateDOM';
import type * as accountLookupTypes from './accountLookupTypes';

export const createAccountLookupElements = (): accountLookupTypes.AccountLookupElements => {
  const dom = new CreateDOM();

  const wrapper = dom.build({ type: 'div', classes: 'info-card' }) as HTMLDivElement;
  const label = dom.build({
    type: 'label',
    content: 'Wallet address',
  }) as HTMLLabelElement;
  const inputRow = dom.build({ type: 'div', classes: 'input-row' }) as HTMLDivElement;

  const input = dom.build({
    type: 'input',
    classes: 'address-input',
    attribute: { name: 'placeholder', value: '0x...' },
  }) as HTMLInputElement;

  const clearButton = dom.build({
    type: 'button',
    content: '✕',
    classes: 'clear-btn',
  }) as HTMLButtonElement;

  const button = dom.build({
    type: 'button',
    content: 'Check',
    classes: 'btn',
  }) as HTMLButtonElement;

  const output = dom.build({ type: 'p', classes: 'output-text' }) as HTMLParagraphElement;

  label.setAttribute('for', 'wallet-address');

  input.id = 'wallet-address';
  input.name = 'walletAddress';
  input.type = 'text';
  input.autocomplete = 'off';

  clearButton.type = 'button';
  button.type = 'button';

  return {
    wrapper,
    label,
    inputRow,
    input,
    clearButton,
    button,
    output,
  };
};
