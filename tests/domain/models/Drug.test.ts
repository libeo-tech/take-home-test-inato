import { expect } from 'chai';
import { Drug } from '../../../src/domain/models/Drug';

describe('Drug', () => {
  it('Should have an "expiresIn" property', () => {
    const drug = Drug.create({ expiresIn: 12 });

    expect(drug.getExpiresIn()).to.eql(12);
  });
});
