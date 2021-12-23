import { Double, DoubleAfterExpires, Linear, Reverse, ZeroAfterExpires } from "./revaluations";

describe("Revaluations", () => {
  it("should decrease the benefit", () => {
    const currentBenefit = 15;
    expect(
      new Linear().calculate({
        currentBenefit,
        beforeRevaluationBenefit: 0,
        expiresIn: 0
      })
    ).toEqual(currentBenefit - 1);
  });

  test.each([[2, 3], [5, 10], [16, 27]])(
    "should decrease the benefit twice for %i, %i",
    (currentBenefit, beforeRevaluationBenefit) => {
      expect(
        new Double().calculate({
          currentBenefit,
          beforeRevaluationBenefit,
          expiresIn: 0
        })
      ).toBe(currentBenefit - (beforeRevaluationBenefit - currentBenefit));
    }
  );

  it("should decrease the benefit double after expire and should do nothing when not expired", () => {
    const currentBenefit = 15;
    const beforeRevaluationBenefit = 10;

    expect(
      new DoubleAfterExpires().calculate({
        currentBenefit,
        beforeRevaluationBenefit,
        expiresIn: 0
      })
    ).toEqual(currentBenefit - (beforeRevaluationBenefit - currentBenefit));

    expect(
      new DoubleAfterExpires().calculate({
        currentBenefit,
        beforeRevaluationBenefit,
        expiresIn: 5
      })
    ).toEqual(currentBenefit);
  });

  it("should zero the benefit after expire and should do nothing when not expire", () => {
    const currentBenefit = 15;
    const beforeRevaluationBenefit = 10;

    expect(
      new ZeroAfterExpires().calculate({
        currentBenefit,
        beforeRevaluationBenefit,
        expiresIn: 0
      })
    ).toEqual(0);

    expect(
      new ZeroAfterExpires().calculate({
        currentBenefit,
        beforeRevaluationBenefit,
        expiresIn: 5
      })
    ).toEqual(currentBenefit);
  });

  test.each([[2, 3], [5, 10], [16, 27]])(
    "should increase the benefit instead decreasing for %i, %i",
    (currentBenefit, beforeRevaluationBenefit) => {
      expect(
        new Reverse().calculate({
          currentBenefit,
          beforeRevaluationBenefit,
          expiresIn: 0
        })
      ).toBe(beforeRevaluationBenefit + (beforeRevaluationBenefit - currentBenefit));
    }
  );
});
