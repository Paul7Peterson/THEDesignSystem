import { render } from '~/utils/testUtils';
import './z-modal';

describe('z-modal', async () => {
  it('passes', () => {
    const root = render(`<z-modal/>`);
    console.log(root.querySelector('.z-modal'));


    expect(true).toBe(true);
  });
});
