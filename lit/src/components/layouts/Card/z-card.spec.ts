import { render } from '~/utils/testUtils';
import './z-card';

describe('z-card', async () => {
  it('passes', () => {
    const root = render(`<z-card/>`);
    console.log(root.querySelector('.z-card'));


    expect(true).toBe(true);
  });
});
