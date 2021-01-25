import { Drug } from './Drug';

describe('Drug', () => {
  it('assign value from the constructor to the instance variables', () => {
    const secretMedicine = new Drug('secret', 10, 15);

    expect(secretMedicine.name).toEqual('secret');
    expect(secretMedicine.expiresIn).toEqual(10);
    expect(secretMedicine.benefit).toEqual(15);
  });

  it('default benefit update', () => {
    const generic = new Drug('generic', 5, 10);

    generic.updateBenefit();
    expect(generic.expiresIn).toEqual(4);
    expect(generic.benefit).toEqual(9);

    while (generic.expiresIn > 0) {
      generic.updateBenefit();
    }

    expect(generic.benefit).toEqual(5);
    expect(generic.expiresIn).toEqual(0);

    generic.updateBenefit();
    expect(generic.benefit).toEqual(3);
    expect(generic.expiresIn).toEqual(-1);

    generic.updateBenefit();
    generic.updateBenefit();
    expect(generic.benefit).toEqual(0);
    expect(generic.expiresIn).toEqual(-3);
  });

  it('decrease benefit never go below 0', () => {
    const drug = new Drug('generic', 1, 2);
    drug.decreaseBenefit();
    expect(drug.benefit).toEqual(1);
    drug.decreaseBenefit(10);
    expect(drug.benefit).toEqual(0);
  });

  it('increase benefit up to 50', () => {
    const drug = new Drug('generic', 10, 20);
    drug.increaseBenefit();
    expect(drug.benefit).toEqual(21);
    drug.increaseBenefit(1000000);
    expect(drug.benefit).toEqual(50);
  });
});
