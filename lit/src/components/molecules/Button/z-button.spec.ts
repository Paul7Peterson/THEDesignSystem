import { render } from '~/utils/testUtils';
import './z-button';

describe('z-button', async () => {
  it('passes', () => {
    const root = render(`<z-button/>`);
    console.log(root.querySelector('.z-button'));


    expect(true).toBe(true);
  });
});
