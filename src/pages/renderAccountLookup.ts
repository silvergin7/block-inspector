import CreateDOM from '../helpers/CreateDOM';
import { bindAccountLookupEvents } from './accountLookup/bindAccountLookupEvents';
import { createAccountLookupElements } from './accountLookup/createAccountLookupElements';

const panel = document.querySelector('#account-lookup') as HTMLDivElement;

export const renderAccountLookup = () => {
  const dom = new CreateDOM();
  const elements = createAccountLookupElements();

  bindAccountLookupEvents(elements);

  elements.inputRow.appendChild(elements.input);
  elements.inputRow.appendChild(elements.clearButton);

  elements.wrapper.appendChild(dom.build({ type: 'h2', content: 'Account Balance' }));
  elements.wrapper.appendChild(elements.label);
  elements.wrapper.appendChild(elements.inputRow);
  elements.wrapper.appendChild(elements.button);
  elements.wrapper.appendChild(elements.output);

  panel.appendChild(elements.wrapper);
};
