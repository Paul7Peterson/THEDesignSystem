import { render } from '~/utils/testUtils';
import './z-spinner';

describe('z-spinner', async () => {
  it('passes', () => {
    const root = render(`<z-spinner/>`);
    console.log(root.querySelector('.z-spinner'));


    expect(true).toBe(true);
  });
});
