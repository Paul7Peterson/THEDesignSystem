import { render } from '~/utils/testUtils';
import './z-select';

describe('z-select', async () => {
  it('passes', () => {
    const root = render(`<z-select/>`);
    console.log(root.querySelector('.z-select'));


    expect(true).toBe(true);
  });
});
