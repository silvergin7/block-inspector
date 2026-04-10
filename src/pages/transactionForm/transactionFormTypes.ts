export type TransactionFormElements = {
  wrapper: HTMLDivElement;
  buttonRow: HTMLDivElement;
  connectButton: HTMLButtonElement;
  disconnectButton: HTMLButtonElement;
  walletStatus: HTMLParagraphElement;
  toLabel: HTMLLabelElement;
  toRow: HTMLDivElement;
  toInput: HTMLInputElement;
  clearToButton: HTMLButtonElement;
  amountLabel: HTMLLabelElement;
  amountRow: HTMLDivElement;
  amountInput: HTMLInputElement;
  clearAmountButton: HTMLButtonElement;
  sendButton: HTMLButtonElement;
  output: HTMLParagraphElement;
};

export type TransactionFormState = {
  connectedAccount: string;
};
