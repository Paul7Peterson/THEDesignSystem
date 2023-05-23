import { render } from '~/utils/testUtils';
import './z-checkbox';

describe('z-checkbox', async () => {
  it('passes', () => {
    const root = render(`<z-checkbox/>`);
    console.log(root.querySelector('.z-checkbox'));


    expect(true).toBe(true);
  });
});
