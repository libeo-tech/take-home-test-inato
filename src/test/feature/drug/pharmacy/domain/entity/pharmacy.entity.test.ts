import { Drug, MagicPill, Pharmacy } from "feature";
import {
  creationTime,
  dayInMs,
} from "test/feature/drug/domain/entity/constants";
import { mockDateNow } from "test/utils";

describe("Pharmacy entity", () => {
  it("should set the elapsed time since creation of drugs if a value is passed in parameter and if the drug allow setting external elapsed time", () => {
    const drugs = [new Drug("d", 20, 20, true)];
    const pharmacy = new Pharmacy(drugs);

    const updatedDrugs = pharmacy.updateBenefitValue(2);

    expect(updatedDrugs[0].expiresIn).toBe(18);
  });
  it("should set the elapsed time since creation of drugs for all drugs in pharmacy", () => {
    const drugs = [
      new Drug("d", 20, 20, true),
      new MagicPill("Magic Pill", 20, 20, true),
    ];
    const pharmacy = new Pharmacy(drugs);

    const updatedDrugs = pharmacy.updateBenefitValue(2);

    expect(updatedDrugs[0].expiresIn).toBe(18);
    expect(updatedDrugs[1].expiresIn).toBe(20);
  });
  it("should use current time if no value is passed in parameter", () => {
    mockDateNow(creationTime);
    const drugs = [new Drug("d", 20, 20)];
    const pharmacy = new Pharmacy(drugs);

    mockDateNow(creationTime + 2 * dayInMs);
    const updatedDrugs = pharmacy.updateBenefitValue();

    expect(updatedDrugs[0].expiresIn).toBe(18);
  });
});
