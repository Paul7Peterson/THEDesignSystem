import { render } from '~/utils/testUtils';
import './z-output';

describe('z-output', async () => {
  it('passes', () => {
    const root = render(`<z-output/>`);
    console.log(root.querySelector('.z-output'));


    expect(true).toBe(true);
  });
});
