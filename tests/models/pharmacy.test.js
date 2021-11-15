import Drug from '../../src/models/drug';
import HerbalTea from '../../src/models/drugs/herbalTea';
import MagicPill from '../../src/models/drugs/magicPill';
import Fervex from '../../src/models/drugs/fervex';
import Pharmacy from '../../src/models/pharmacy';

describe("Pharmacy", () => {
  it.only("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateDrugs()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it.only("should benefit never be negative", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateDrugs()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });

  it.only("should degrades benefit twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Drug("test", -1, 10)]).updateDrugs()).toEqual(
      [new Drug("test", -2, 8)]
    );
    expect(new Pharmacy([new Drug("test", 0, 10)]).updateDrugs()).toEqual(
      [new Drug("test", -1, 8)]
    );
  });

  it.only("should increases benefit twice faster the older it gets", () => {
    expect(new Pharmacy([new HerbalTea(-1, 10)]).updateDrugs()).toEqual(
      [new HerbalTea(-2, 12)]
    );
    expect(new Pharmacy([new HerbalTea(0, 15)]).updateDrugs()).toEqual(
      [new HerbalTea(-1, 17)]
    );
  });

  it.only("should benefit never be superior to 50", () => {
    expect(new Pharmacy([new Fervex(2, 49)]).updateDrugs()).toEqual(
      [new Fervex(1, 50)]
    );
    expect(new Pharmacy([new HerbalTea(-1, 50)]).updateDrugs()).toEqual(
      [new HerbalTea(-2, 50)]
    );
  });

  it.only("should Magic Pill never decrease in benefit nor expires", () => {
    expect(new Pharmacy([new MagicPill(0, 25)]).updateDrugs()).toEqual(
      [new MagicPill(0, 25)]
    );
  });

  it.only("should Fervex increases in by 2 benefit as its expiration date approaches when there are 10 days or less", () => {
    expect(new Pharmacy([new Fervex(11, 20)]).updateDrugs()).toEqual(
      [new Fervex(10, 21)]
    );
    expect(new Pharmacy([new Fervex(10, 20)]).updateDrugs()).toEqual(
      [new Fervex(9, 22)]
    );
    expect(new Pharmacy([new Fervex(9, 20)]).updateDrugs()).toEqual(
      [new Fervex(8, 22)]
    );
  });

  it.only("should Fervex increases in by 3 benefit as its expiration date approaches when there are 5 days or less", () => {
    expect(new Pharmacy([new Fervex(6, 20)]).updateDrugs()).toEqual(
      [new Fervex(5, 22)]
    );
    expect(new Pharmacy([new Fervex(5, 20)]).updateDrugs()).toEqual(
      [new Fervex(4, 23)]
    );
    expect(new Pharmacy([new Fervex(4, 20)]).updateDrugs()).toEqual(
      [new Fervex(3, 23)]
    );
  });

  it.only("should Fervex benefit drops to 0 after the expiration date", () => {
    expect(new Pharmacy([new Fervex(0, 20)]).updateDrugs()).toEqual(
      [new Fervex(-1, 0)]
    );
  });
});
