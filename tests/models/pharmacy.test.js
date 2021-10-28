import { Pharmacy } from "../../src/models";
import { MagicPill, Doliprane, Fervex, HerbalTea, Dafalgan } from "../../src/models/Drugs";


describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [
      new Doliprane(20, 30),
      new HerbalTea(10, 5),
      new Fervex(5, 40),
      new MagicPill(15, 40),
      new Dafalgan(20, 40),
    ];

    const drugsFromPharmacySerialized = JSON.stringify(new Pharmacy(drugs).updateBenefitValue());
    const drugsExpectedFromPharmacySerialized = JSON.stringify([
      new Doliprane(19, 29),
      new HerbalTea(9, 6),
      new Fervex(4, 43),
      new MagicPill(15, 40),
      new Dafalgan(19, 38),
    ]);

    expect(drugsFromPharmacySerialized).toEqual(drugsExpectedFromPharmacySerialized);
  });
});
