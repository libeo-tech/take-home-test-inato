import { expect } from 'chai';
import { addDays } from 'date-fns';
import {
  Drug,
  Fervex
} from '../../../src/domain/models/Drug';

describe('Drug', () => {
  let defaultOriginalBenefit: number;
  let defaultExpiresIn: number;
  let defaultCreatedAt: Date;
  let dummyName: string;

  before(() => {
  });

  beforeEach(() => {
    dummyName = 'drug test';
    defaultOriginalBenefit = 10;
    defaultExpiresIn = 7;
    defaultCreatedAt = new Date('2022-03-12T10:00:00+01:00');
  });

  it('Should have an "originalExpiresIn" property', () => {
    const drug = new Drug({
      name: dummyName,
      originalExpiresIn: 12,
      originalBenefit: defaultOriginalBenefit,
      createdAt: defaultCreatedAt,
    });

    expect(drug.getExpiresIn()).to.eql(12);
  });

  it('Should have a "originalBenefit" property', () => {
    const drug = new Drug({
      name: dummyName,
      originalExpiresIn: defaultExpiresIn,
      originalBenefit: 16,
      createdAt: defaultCreatedAt,
    });

    expect(drug.getOriginalBenefit()).to.eql(16);
  });

  it ('Should have a date of "creation"', () => {
    const createdAt = new Date('2022-03-02T10:00:00+01:00');
    const drug = new Drug({
      name: dummyName,
      originalExpiresIn: defaultExpiresIn,
      originalBenefit: 16,
      createdAt,
    });

    expect(drug.getCreatedAt()).to.eql(createdAt);
  });

  describe('Handle expiration', () => {
    it('Should not decrement expirationIn', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-01T10:00:00+01:00'),
      });

      expect(drug.getExpiresInAt(new Date('2022-03-01T12:00:00+01:00'))).to.eql(7);
    });

    it('Should decrement expirationIn by 1', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-01T10:00:00+01:00'),
      });

      expect(drug.getExpiresInAt(new Date('2022-03-02T12:00:00+01:00'))).to.eql(6);
    });

    it('Should decrement expirationIn by 2', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-01T10:00:00+01:00'),
      });

      expect(drug.getExpiresInAt(new Date('2022-03-03T12:00:00+01:00'))).to.eql(5);
    });
    it('Should be expired', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-01T10:00:00+01:00'),
      });

      expect(drug.getExpiresInAt(new Date('2022-03-09T12:00:00+01:00'))).to.eql(0);
    });
  });

  describe('Should handle benefit calculation logic', () => {
    it('Should have a benefit === default benefit because no elapsed day', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-02T10:00:00+01:00'),
      });

      expect(drug.getBenefitAt(new Date('2022-03-02T12:00:00+01:00'))).to.eql(25);
    });

    it('Should have a benefit decrease by one day', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-02T10:00:00+01:00'),
      });

      expect(drug.getBenefitAt(new Date('2022-03-03T12:00:00+01:00'))).to.eql(24);
    });

    it('Should have a benefit of 0 (and not a negative number)', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-02T10:00:00+01:00'),
      });

      expect(drug.getBenefitAt(new Date('2022-03-20T12:00:00+01:00'))).to.eql(0);
    });

    it('Should decrease twice as fast once the expiration is passed', () => {
      const createdAt = new Date('2022-03-02T10:00:00+01:00');
      const originalBenefit = 25;
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit,
        createdAt,
      });

      const createdAtPlusTenDays = addDays(createdAt, 10);

      expect(drug.getBenefitAt(createdAtPlusTenDays)).to.eql(originalBenefit - 13);
    });

    it('Should have a benefit increase by one day', () => {
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit: 25,
        createdAt: new Date('2022-03-02T10:00:00+01:00'),
      }, { timeBenefitFactor: 1 });

      expect(drug.getBenefitAt(new Date('2022-03-03T12:00:00+01:00'))).to.eql(26);
    });

    it('Should increase twice as fast once the expiration is passed', () => {
      const createdAt = new Date('2022-03-02T10:00:00+01:00');
      const originalBenefit = 25;
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit,
        createdAt,
      }, { timeBenefitFactor: 1, timeBenefitFactorAfterExpiration: 2 });

      const someDaysLater = addDays(createdAt, 10);

      expect(drug.getBenefitAt(someDaysLater)).to.eql(originalBenefit + 13);
    });

    it('Should not have a benefit greater than 50', () => {
      const createdAt = new Date('2022-03-02T10:00:00+01:00');
      const originalBenefit = 25;
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit,
        createdAt,
      }, { timeBenefitFactor: 1, timeBenefitFactorAfterExpiration: 2 });

      const someDaysLater = addDays(createdAt, 100);

      expect(drug.getBenefitAt(someDaysLater)).to.eql(50);
    });

    it('Should not decrease following factors', () => {
      const createdAt = new Date('2022-03-02T10:00:00+01:00');
      const originalBenefit = 25;
      const drug = new Drug({
        name: dummyName,
        originalExpiresIn: 7,
        originalBenefit,
        createdAt,
      }, { timeBenefitFactor: 0, timeBenefitFactorAfterExpiration: 0 });

      const someDaysLater = addDays(createdAt, 100);

      expect(drug.getBenefitAt(someDaysLater)).to.eql(originalBenefit);
    });

    describe('Fervex specific use case', () => {
      it('Should increase benefit like herbal tea when not under specific threshold', () => {
        const drug = new Fervex({
          originalExpiresIn: 12,
          originalBenefit: 25,
          createdAt: new Date('2022-03-02T10:00:00+01:00'),
        });

        expect(drug.getBenefitAt(new Date('2022-03-03T12:00:00+01:00'))).to.eql(26);
      });

      it('Should increase benefit with a specific threshold when 9 days before expiration', () => {
        const drug = new Fervex({
          originalExpiresIn: 31,
          originalBenefit: 25,
          createdAt: new Date('2022-03-01T10:00:00+01:00'),
        });

        expect(drug.getBenefitAt(new Date('2022-03-23T12:00:00+01:00'))).to.eql(48);
      });

      it('Should increase benefit with two specific thresholds when 3 days before expiration', () => {
        const drug = new Fervex({
          originalExpiresIn: 15,
          originalBenefit: 1,
          createdAt: new Date('2022-03-01T10:00:00+01:00'),
        });

        expect(drug.getBenefitAt(new Date('2022-03-13T12:00:00+01:00'))).to.eql(22);
      });

      it('Should has 0 benefit when expired', () => {
        const drug = new Fervex({
          originalExpiresIn: 12,
          originalBenefit: 25,
          createdAt: new Date('2022-03-02T10:00:00+01:00'),
        });

        expect(drug.getBenefitAt(new Date('2022-03-16T12:00:00+01:00'))).to.eql(0);
      });

      it('Should decrease by last factor only if medicine specified in specific state', () => {
        const drug = new Fervex({
          originalExpiresIn: 5,
          originalBenefit: 40,
          createdAt: new Date('2022-03-02T10:00:00+01:00'),
        });

        expect(drug.getBenefitAt(new Date('2022-03-03T12:00:00+01:00'))).to.eql(43);
      });

      it('Should decrease by last factor and second if medicine specified in specific state', () => {
        const drug = new Fervex({
          originalExpiresIn: 10,
          originalBenefit: 30,
          createdAt: new Date('2022-03-01T10:00:00+01:00'),
        });

        expect(drug.getBenefitAt(new Date('2022-03-07T12:00:00+01:00'))).to.eql(30 + 10 + 3);
      });
    });
  });
});
