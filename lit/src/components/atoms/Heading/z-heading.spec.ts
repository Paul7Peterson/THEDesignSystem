import { render } from '~/utils/testUtils';
import './z-heading';

describe('z-heading', async () => {
  it('passes', () => {
    const root = render(`<z-heading/>`);
    console.log(root.querySelector('.z-heading'));


    expect(true).toBe(true);
  });
});
