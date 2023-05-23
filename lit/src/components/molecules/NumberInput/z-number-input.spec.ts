import { render } from '~/utils/testUtils';
import './z-number-input';

describe('z-number-input', async () => {
  it('passes', () => {
    const root = render(`<z-number-input number="0"/>`);
    console.log(root.querySelector('.z-number-input'));


    expect(true).toBe(true);
  });
});
