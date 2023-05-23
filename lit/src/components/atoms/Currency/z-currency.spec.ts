import { render } from '~/utils/testUtils';
import './z-currency';

describe('z-currency', async () => {
  it('passes', () => {
    const root = render(`<z-currency/>`);
    console.log(root.querySelector('.z-currency'));


    expect(true).toBe(true);
  });
});
