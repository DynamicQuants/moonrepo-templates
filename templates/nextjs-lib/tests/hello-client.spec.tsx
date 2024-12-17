import { cleanup, render, screen } from '@testing-library/react';

import HelloClient from '../src/lib/hello-client';

describe('HelloClient', () => {
  beforeEach(() => {
    render(<HelloClient />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should match the snapshot', () => {
    const { container } = render(<HelloClient />);
    expect(container).toMatchSnapshot();
  });

  it('should have h1 with correct text', () => {
    const heading = screen.getByRole('heading', { name: 'Hello from Client!' });
    expect(heading).toBeInTheDocument();
  });
});
