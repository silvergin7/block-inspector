import { describe, expect, it } from 'vitest';
import Transfer from '../models/Transfer';

describe('Transfer', () => {
  it('should be an instance of Transfer', () => {
    const transfer = new Transfer();

    expect(transfer).toBeInstanceOf(Transfer);
  });

  it('should have empty from, to and amount on init', () => {
    const transfer = new Transfer();

    expect(transfer.from).toBe('');
    expect(transfer.to).toBe('');
    expect(transfer.amount).toBe('');
  });

  it('should throw error if wallet is not connected', async () => {
    const transfer = new Transfer();

    await expect(
      transfer.sendTransaction('0x0000000000000000000000000000000000000001', '0.01'),
    ).rejects.toThrow('Connect MetaMask first');
  });
});
