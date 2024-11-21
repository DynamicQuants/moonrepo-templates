import { render } from '@testing-library/react';

import Home from '../../../src/app/page';

describe('Home page', () => {
  let container: HTMLElement;
  let unmount: () => void;

  beforeAll(async () => {
    const { container: _container, unmount: _unmount } = render(await Home());
    container = _container;
    unmount = _unmount;
  });

  afterAll(() => {
    unmount();
  });

  it('should match the snapshot', () => {
    expect(container).toMatchSnapshot();
  });

  it('should have the correct tree parent', () => {
    expect(container).toBeInstanceOf(HTMLDivElement);
  });
});
