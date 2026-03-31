import { it, expect, describe } from 'vitest';
import WalletAccount from '../models/WalletAccount';

describe('WalletAccount', () => {
  it('should be an instance of WalletAccount', () => {
    const account = new WalletAccount();
    expect(account).toBeInstanceOf(WalletAccount);
  });

  it('should have empty address and balance on init', () => {
    const account = new WalletAccount();
    expect(account.address).toBe('');
    expect(account.balance).toBe('');
  });

  it('should throw error on invalid address', async () => {
    const account = new WalletAccount();
    await expect(account.getBalance('invalid-address')).rejects.toThrow('Invalid Ethereum address');
  });
});
