import CreateDOM from '../helpers/CreateDOM';
import Transfer from '../models/Transfer';

const panel = document.querySelector('#send-transaction') as HTMLDivElement;

const createInput = (placeholder: string) => {
  const dom = new CreateDOM();
  const input = dom.build({
    type: 'input',
    classes: 'address-input',
    attribute: { name: 'placeholder', value: placeholder },
  });

  return input as HTMLInputElement;
};

export const renderTransactionForm = () => {
  const dom = new CreateDOM();
  const wrapper = dom.build({ type: 'div', classes: 'info-card' });

  const fromLabel = dom.build({ type: 'label', content: 'From address' }) as HTMLLabelElement;
  const fromInput = createInput('0x...');

  const toLabel = dom.build({ type: 'label', content: 'To address' }) as HTMLLabelElement;
  const toInput = createInput('0x...');

  const amountLabel = dom.build({ type: 'label', content: 'Amount (ETH)' }) as HTMLLabelElement;
  const amountInput = createInput('Amount in ETH');

  const output = dom.build({ type: 'p', classes: 'output-text' });
  const button = dom.build({
    type: 'button',
    content: 'Send',
    classes: 'btn',
  }) as HTMLButtonElement;

  fromLabel.setAttribute('for', 'from-address');
  toLabel.setAttribute('for', 'to-address');
  amountLabel.setAttribute('for', 'amount');

  fromInput.id = 'from-address';
  fromInput.name = 'fromAddress';
  fromInput.type = 'text';
  fromInput.autocomplete = 'off';

  toInput.id = 'to-address';
  toInput.name = 'toAddress';
  toInput.type = 'text';
  toInput.autocomplete = 'off';

  amountInput.id = 'amount';
  amountInput.name = 'amount';
  amountInput.type = 'text';
  amountInput.inputMode = 'decimal';
  amountInput.autocomplete = 'off';

  button.type = 'button';

  button.addEventListener('click', async () => {
    try {
      const hash = await new Transfer().sendTransaction(
        fromInput.value.trim(),
        toInput.value.trim(),
        amountInput.value.trim(),
      );

      fromInput.value = '';
      toInput.value = '';
      amountInput.value = '';

      output.innerHTML = `Transaction hash: <a href="https://sepolia.etherscan.io/tx/${hash}" target="_blank">${hash}</a>`;
    } catch (error: any) {
      output.textContent = error.message;
    }
  });

  wrapper.appendChild(dom.build({ type: 'h2', content: 'Send Transaction' }));
  wrapper.appendChild(fromLabel);
  wrapper.appendChild(fromInput);
  wrapper.appendChild(toLabel);
  wrapper.appendChild(toInput);
  wrapper.appendChild(amountLabel);
  wrapper.appendChild(amountInput);
  wrapper.appendChild(button);
  wrapper.appendChild(output);

  panel.appendChild(wrapper);
};
