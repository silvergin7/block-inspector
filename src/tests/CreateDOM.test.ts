import { it, expect, describe } from 'vitest';
import CreateDOM from '../helpers/CreateDOM';

describe('CreateDOM', () => {
  it('should return an element with correct type', () => {
    const dom = new CreateDOM();
    const el = dom.build({ type: 'div' });
    expect(el.nodeName).toBe('DIV');
  });

  it('should set correct text content', () => {
    const dom = new CreateDOM();
    const el = dom.build({ type: 'p', content: 'Hello' });
    expect(el.textContent).toBe('Hello');
  });

  it('should set correct class name', () => {
    const dom = new CreateDOM();
    const el = dom.build({ type: 'div', classes: 'info-card' });
    expect(el.className).toBe('info-card');
  });

  it('should set correct attribute', () => {
    const dom = new CreateDOM();
    const el = dom.build({ type: 'a', attribute: { name: 'href', value: 'https://sepolia.etherscan.io' } });
    expect(el.getAttribute('href')).toBe('https://sepolia.etherscan.io');
  });
});
