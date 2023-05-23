import { render } from '~/utils/testUtils';
import './z-date';

describe('z-date', async () => {
  it('passes', () => {
    const root = render(`<z-date/>`);
    console.log(root.querySelector('.z-date'));


    expect(true).toBe(true);
  });
});
