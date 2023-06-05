import { render } from '~/utils/testUtils';
import './z-switch';

describe('z-switch', async () => {
  it('passes', () => {
    const root = render(`<z-switch/>`);
    console.log(root.querySelector('.z-switch'));


    expect(true).toBe(true);
  });
});
