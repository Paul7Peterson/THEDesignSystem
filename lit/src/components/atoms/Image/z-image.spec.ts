import { render } from '~/utils/testUtils';
import './z-image';

describe('z-image', async () => {
  it('passes', () => {
    const root = render(`<z-image/>`);
    console.log(root.querySelector('.z-image'));


    expect(true).toBe(true);
  });
});
