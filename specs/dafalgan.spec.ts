import { TrialRunner } from "./helpers";
import { DrugFactory } from "../src";

const DRUG_NAME = "Dafalgan";

describe(`Given "${DRUG_NAME}" drug`, () => {
  it("Benefit should decrease by 2 until expired", () => {
    return expectBenefit({ expiresIn: 5, benefit: 10 }, [
      { day: 0, expectedBenefit: 8 },
      { day: 1, expectedBenefit: 6 },
      { day: 2, expectedBenefit: 4 },
      { day: 3, expectedBenefit: 2 },
      { day: 4, expectedBenefit: 0 },
      { day: 5, expectedBenefit: 0 },
    ]);
  });

  it("Benefit should decrease by 4 after expired", () => {
    return expectBenefit({ expiresIn: 2, benefit: 10 }, [
      { day: 0, expectedBenefit: 8 },
      { day: 1, expectedBenefit: 6 },
      { day: 2, expectedBenefit: 2 },
      { day: 3, expectedBenefit: 0 },
      { day: 4, expectedBenefit: 0 },
      { day: 5, expectedBenefit: 0 },
    ]);
  });

  function expectBenefit(
    { expiresIn, benefit }: { expiresIn: number; benefit: number },
    benefitExpections: { day: number; expectedBenefit: number }[]
  ) {
    const result = TrialRunner.newInstance()
      .withDrugs([buildDrug(expiresIn, benefit)])
      .run();

    benefitExpections.forEach(({ day, expectedBenefit }) =>
      result.expectDayPharmacyStateToEqual(day, [
        {
          name: DRUG_NAME,
          expiresIn: expiresIn - (day + 1),
          benefit: expectedBenefit,
        },
      ])
    );

    return result.done();
  }

  function buildDrug(expiresIn: number, benefit: number) {
    return DrugFactory.buildDafalgan(expiresIn, benefit);
  }
});
