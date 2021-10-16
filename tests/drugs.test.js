import {
  Doliprane,
  Dafalgan,
  Fervex,
  HerbalTea,
  MagicPill,
  Drug
} from "../models";

describe("Models of Drugs", () => {
  it("should instantiate a Dafalgan successfully, and check it is a drug", () => {
    expect(new Dafalgan(20, 30) instanceof Drug).toBe(true);
  });

  it("should instantiate a Doliprane successfully, and check it is a drug", () => {
    expect(new Doliprane(20, 30) instanceof Drug).toBe(true);
  });

  it("should instantiate a Fervex successfully, and check it is a drug", () => {
    expect(new Fervex(20, 30) instanceof Drug).toBe(true);
  });

  it("should instantiate an HerbalTea successfully, and check it is a drug", () => {
    expect(new HerbalTea(20, 30) instanceof Drug).toBe(true);
  });

  it("should instantiate a Magic Pill successfully, and check it is a drug", () => {
    expect(new MagicPill(20, 30) instanceof Drug).toBe(true);
  });
});
