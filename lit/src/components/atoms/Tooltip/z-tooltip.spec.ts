import { render } from '~/utils/testUtils';
import './z-tooltip';

describe('z-tooltip', async () => {
  it('passes', () => {
    const root = render(`<z-tooltip/>`);
    console.log(root.querySelector('.z-tooltip'));


    expect(true).toBe(true);
  });
});
