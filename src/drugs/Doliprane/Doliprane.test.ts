import { Doliprane } from './Doliprane';

describe('Doliprane', () => {
  it('set default value', () => {
    const doliprane = new Doliprane();
    expect(doliprane).toMatchObject({
      name: 'Doliprane',
      expiresIn: 20,
      benefit: 30,
    });
  });
});
