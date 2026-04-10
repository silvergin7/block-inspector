import CreateDOM from '../helpers/CreateDOM';
import WalletAccount from '../models/WalletAccount';

const panel = document.querySelector('#account-lookup') as HTMLDivElement;

export const renderAccountLookup = () => {
  const dom = new CreateDOM();
  const wrapper = dom.build({ type: 'div', classes: 'info-card' });
  const label = dom.build({ type: 'label', content: 'Wallet address' }) as HTMLLabelElement;
  const inputRow = dom.build({ type: 'div', classes: 'input-row' });
  const input = dom.build({
    type: 'input',
    classes: 'address-input',
    attribute: { name: 'placeholder', value: '0x...' },
  }) as HTMLInputElement;
  const clearBtn = dom.build({
    type: 'button',
    content: '✕',
    classes: 'clear-btn',
  }) as HTMLButtonElement;
  const output = dom.build({ type: 'p', classes: 'output-text' });
  const button = dom.build({
    type: 'button',
    content: 'Check balance',
    classes: 'btn',
  }) as HTMLButtonElement;

  label.setAttribute('for', 'wallet-address');

  input.id = 'wallet-address';
  input.name = 'walletAddress';
  input.type = 'text';
  input.autocomplete = 'off';

  clearBtn.type = 'button';
  button.type = 'button';

  clearBtn.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
  });

  button.addEventListener('click', async () => {
    try {
      const balance = await new WalletAccount().getBalance(input.value.trim());
      output.textContent = `Balance: ${balance} ETH`;
    } catch (error: any) {
      output.textContent = error.message;
    }
  });

  inputRow.appendChild(input);
  inputRow.appendChild(clearBtn);

  wrapper.appendChild(dom.build({ type: 'h2', content: 'Account Balance' }));
  wrapper.appendChild(label);
  wrapper.appendChild(inputRow);
  wrapper.appendChild(button);
  wrapper.appendChild(output);

  panel.appendChild(wrapper);
};
