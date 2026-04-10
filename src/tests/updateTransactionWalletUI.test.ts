import { describe, expect, it } from 'vitest';
import { updateTransactionWalletUI } from '../pages/transactionForm/updateTransactionWalletUI';
import type { TransactionFormElements } from '../pages/transactionForm/transactionFormTypes';

const createElements = (): TransactionFormElements => ({
  wrapper: document.createElement('div'),
  buttonRow: document.createElement('div'),
  connectButton: document.createElement('button'),
  disconnectButton: document.createElement('button'),
  walletStatus: document.createElement('p'),
  toLabel: document.createElement('label'),
  toRow: document.createElement('div'),
  toInput: document.createElement('input'),
  clearToButton: document.createElement('button'),
  amountLabel: document.createElement('label'),
  amountRow: document.createElement('div'),
  amountInput: document.createElement('input'),
  clearAmountButton: document.createElement('button'),
  sendButton: document.createElement('button'),
  output: document.createElement('p'),
});

describe('updateTransactionWalletUI', () => {
  it('should show connected wallet state', () => {
    const elements = createElements();

    updateTransactionWalletUI(elements, '0x123');

    expect(elements.connectButton.className).toBe('btn btn-connected');
    expect(elements.connectButton.getAttribute('aria-label')).toBe('MetaMask connected');
    expect(elements.disconnectButton.style.display).toBe('inline-flex');
    expect(elements.walletStatus.style.display).toBe('block');
    expect(elements.walletStatus.textContent).toBe('0x123');
  });

  it('should show disconnected wallet state', () => {
    const elements = createElements();

    updateTransactionWalletUI(elements, '');

    expect(elements.connectButton.className).toBe('btn btn-connect');
    expect(elements.connectButton.getAttribute('aria-label')).toBe('Connect MetaMask');
    expect(elements.disconnectButton.style.display).toBe('none');
    expect(elements.walletStatus.style.display).toBe('none');
    expect(elements.walletStatus.textContent).toBe('');
  });
});
