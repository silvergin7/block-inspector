import { it, expect, describe } from 'vitest';
import NetworkOverview from '../models/NetworkOverview';

describe('NetworkOverview', () => {
  it('should be an instance of NetworkOverview', () => {
    const network = new NetworkOverview();
    expect(network).toBeInstanceOf(NetworkOverview);
  });

  it('should have blockHeight set to 0n on init', () => {
    const network = new NetworkOverview();
    expect(network.blockHeight).toBe(0n);
  });
});
