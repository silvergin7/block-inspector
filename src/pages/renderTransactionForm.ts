import CreateDOM from '../helpers/CreateDOM';
import Transfer from '../models/Transfer';

const panel = document.querySelector('#send-transaction') as HTMLDivElement;

const createInput = (placeholder: string) => {
  const dom = new CreateDOM();
  const input = dom.build({ type: 'input', classes: 'address-input', attribute: { name: 'placeholder', value: placeholder } });
  return input as HTMLInputElement;
};

export const renderTransactionForm = () => {
  const dom = new CreateDOM();
  const wrapper = dom.build({ type: 'div', classes: 'info-card' });
  const fromInput = createInput('From: 0x...');
  const toInput = createInput('To: 0x...');
  const amountInput = createInput('Amount in ETH');
  const output = dom.build({ type: 'p', classes: 'output-text' });
  const button = dom.build({ type: 'button', content: 'Send', classes: 'btn' });

  button.addEventListener('click', async () => {
    try {
      const hash = await new Transfer().sendTransaction(fromInput.value.trim(), toInput.value.trim(), amountInput.value.trim());
      fromInput.value = '';
      toInput.value = '';
      amountInput.value = '';
      output.innerHTML = `Transaction hash: <a href="https://sepolia.etherscan.io/tx/${hash}" target="_blank">${hash}</a>`;
    } catch (error: any) {
      output.textContent = error.message;
    }
  });

  wrapper.appendChild(dom.build({ type: 'h2', content: 'Send Transaction' }));
  wrapper.appendChild(fromInput);
  wrapper.appendChild(toInput);
  wrapper.appendChild(amountInput);
  wrapper.appendChild(button);
  wrapper.appendChild(output);
  panel.appendChild(wrapper);
};
