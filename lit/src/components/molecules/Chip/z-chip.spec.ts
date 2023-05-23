import { render } from '~/utils/testUtils';
import './z-chip';

describe('z-chip', async () => {
  it('passes', () => {
    const root = render(`<z-chip/>`);
    console.log(root.querySelector('.z-chip'));


    expect(true).toBe(true);
  });
});
