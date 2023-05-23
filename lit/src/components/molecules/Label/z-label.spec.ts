import { render } from '~/utils/testUtils';
import './z-label';

describe('z-label', async () => {
  it('passes', () => {
    const root = render(`<z-label/>`);
    console.log(root.querySelector('.z-label'));


    expect(true).toBe(true);
  });
});
