import MagicPill from '../../../src/models/drugs/magicPill';
import Pharmacy from '../../../src/models/pharmacy';

describe("Magic Pill", () => {
  it("should Magic Pill never decrease in benefit nor expires", () => {
    expect(new Pharmacy([new MagicPill(0, 25)]).updateDrugs()).toEqual(
      [new MagicPill(0, 25)]
    );
  });
});
