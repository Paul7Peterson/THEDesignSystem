import { render } from '~/utils/testUtils';
import './z-tabs';

describe('z-tabs', async () => {
  it('passes', () => {
    const root = render(`<z-tabs/>`);
    console.log(root.querySelector('.z-tabs'));


    expect(true).toBe(true);
  });
});
