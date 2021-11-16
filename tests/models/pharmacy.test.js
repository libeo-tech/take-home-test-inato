import Drug from "../../src/models/drug";
import Dafalgan from "../../src/models/drugs/dafalgan";
import Doliprane from "../../src/models/drugs/doliprane";
import Fervex from "../../src/models/drugs/fervex";
import HerbalTea from "../../src/models/drugs/herbalTea";
import MagicPill from "../../src/models/drugs/magicPill";
import Pharmacy from "../../src/models/pharmacy";

describe("Pharmacy", () => {
  it("should update drugs successfully", () => {
    expect(
      new Pharmacy([
        new Drug("test", 2, 3),
        new Dafalgan(5, 6),
        new Doliprane(5, 6),
        new Fervex(5, 6),
        new HerbalTea(5, 6),
        new MagicPill(5, 6)
      ]).updateDrugs()
    ).toEqual([
      new Drug("test", 1, 2),
      new Dafalgan(4, 4),
      new Doliprane(4, 5),
      new Fervex(4, 9),
      new HerbalTea(4, 7),
      new MagicPill(5, 6)
    ]);
  });
});
