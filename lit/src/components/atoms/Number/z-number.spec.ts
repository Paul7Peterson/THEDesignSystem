import { render } from '~/utils/testUtils';
import './z-number';

describe('z-number', async () => {
  it('passes', () => {
    const root = render(`<z-number/>`);
    console.log(root.querySelector('.z-number'));


    expect(true).toBe(true);
  });
});
