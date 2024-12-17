import { cleanup, render, screen } from '@testing-library/react';

import { HelloServer } from '../src/lib/hello-server';

describe('HelloServer', () => {
  beforeEach(async () => {
    render(await HelloServer());
  });

  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot', async () => {
    const { container } = render(await HelloServer());
    expect(container).toMatchSnapshot();
  });

  it('should have h1 with correct text', () => {
    const heading = screen.getByRole('heading', { name: 'Hello from Server!' });
    expect(heading).toBeInTheDocument();
  });
});
