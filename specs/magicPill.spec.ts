import { TrialRunner } from "./helpers";
import { DrugFactory } from "../src";

const DRUG_NAME = "Magic Pill";

describe(`Given "${DRUG_NAME}" drug`, () => {
  describe("When the trial is complete", () => {
    it("Then drug state should remain constant", () => {
      const expiresIn = 1;
      const benefit = 1;

      return TrialRunner.newInstance()
        .withDrugs([buildMagicPill(expiresIn, benefit)])
        .run()
        .expectLastPharmacyStateToEqual([
          { name: DRUG_NAME, expiresIn, benefit },
        ])
        .done();
    });
  });

  function buildMagicPill(expiresIn: number, benefit: number) {
    return DrugFactory.buildMagicPill(expiresIn, benefit);
  }
});
