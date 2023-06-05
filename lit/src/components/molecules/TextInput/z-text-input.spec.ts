import { render } from '~/utils/testUtils';
import './z-text-input';

describe('z-text-input', async () => {
  it('passes', () => {
    const root = render(`<z-text-input text="Hello"/>`);
    console.log(root.querySelector('.z-text-input'));


    expect(true).toBe(true);
  });
});
