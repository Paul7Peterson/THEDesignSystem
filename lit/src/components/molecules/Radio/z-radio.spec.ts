import { render } from '~/utils/testUtils';
import './z-radio';

describe('z-radio', async () => {
  it('passes', () => {
    const root = render(`<z-radio/>`);
    console.log(root.querySelector('.z-radio'));


    expect(true).toBe(true);
  });
});
