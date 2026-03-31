import CreateDOM from '../helpers/CreateDOM';
import WalletAccount from '../models/WalletAccount';

const panel = document.querySelector('#account-lookup') as HTMLDivElement;

export const renderAccountLookup = () => {
  const dom = new CreateDOM();
  const wrapper = dom.build({ type: 'div', classes: 'info-card' });
  const inputRow = dom.build({ type: 'div', classes: 'input-row' });
  const input = dom.build({ type: 'input', classes: 'address-input', attribute: { name: 'placeholder', value: '0x...' } });
  const clearBtn = dom.build({ type: 'button', content: '✕', classes: 'clear-btn' });
  const output = dom.build({ type: 'p', classes: 'output-text' });
  const button = dom.build({ type: 'button', content: 'Check balance', classes: 'btn' });

  clearBtn.addEventListener('click', () => {
    (input as HTMLInputElement).value = '';
    output.textContent = '';
  });

  button.addEventListener('click', async () => {
    try {
      const balance = await new WalletAccount().getBalance((input as HTMLInputElement).value.trim());
      output.textContent = `Balance: ${balance} ETH`;
    } catch (error: any) {
      output.textContent = error.message;
    }
  });

  inputRow.appendChild(input);
  inputRow.appendChild(clearBtn);
  wrapper.appendChild(dom.build({ type: 'h2', content: 'Account Balance' }));
  wrapper.appendChild(inputRow);
  wrapper.appendChild(button);
  wrapper.appendChild(output);
  panel.appendChild(wrapper);
};

