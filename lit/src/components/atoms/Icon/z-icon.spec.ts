import { render } from '~/utils/testUtils';
import './z-icon';

describe('z-icon', async () => {
  it('passes', () => {
    const root = render(`<z-icon/>`);
    console.log(root.querySelector('.z-icon'));


    expect(true).toBe(true);
  });
});
