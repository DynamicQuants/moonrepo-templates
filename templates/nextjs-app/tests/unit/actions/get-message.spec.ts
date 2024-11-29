import { getMessage } from '@/actions/get-message';

describe('get-message', () => {
  it('should return the correct message', async () => {
    const message = await getMessage();
    expect(message).toBe('Hello World!');
  });
});
