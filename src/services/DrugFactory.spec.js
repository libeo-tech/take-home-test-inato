import Dafalgan, { DAFALGAN } from "./Dafalgan";
import Drug from "./Drug";
import DrugFactory from "./DrugFactory";
import Fervex, { FERVEX } from "./Fervex";
import HerbalTea, { HERBAL_TEA } from "./HerbalTea";
import MagicPill, { MAGIC_PILL } from "./MagicPill";

/**
 *
 */
describe("Test error cases", () => {
  it("should throw Error because all args are not provided", () => {
    expect(() => {
      DrugFactory.getInstance();
    }).toThrow(
      new Error("Must provide all 'name' , 'expiresIn' , 'benefit' arguments")
    );

    expect(() => {
      DrugFactory.getInstance(FERVEX);
    }).toThrow(
      new Error("Must provide all 'name' , 'expiresIn' , 'benefit' arguments")
    );

    expect(() => {
      DrugFactory.getInstance(MAGIC_PILL, 1);
    }).toThrow(
      new Error("Must provide all 'name' , 'expiresIn' , 'benefit' arguments")
    );
  });

  it("should throw Error because expiresIn or benefit is not int", () => {
    expect(() => {
      DrugFactory.getInstance(MAGIC_PILL, "1", 0);
    }).toThrow(new Error("args 'expiresIn' and 'benefit' must be integer"));

    expect(() => {
      DrugFactory.getInstance(FERVEX, 1, "0");
    }).toThrow(new Error("args 'expiresIn' and 'benefit' must be integer"));

    expect(() => {
      DrugFactory.getInstance(HERBAL_TEA, "1", "0");
    }).toThrow(new Error("args 'expiresIn' and 'benefit' must be integer"));
  });

  it("should throw Error because  benefit exceed 50 unit is not int", () => {
    expect(() => {
      DrugFactory.getInstance("test", 1, 51);
    }).toThrow(new Error("benefit can't exceed 50"));
  });
});

/**
 *
 */
describe("Test Factory getInstance", () => {
  it("should return diffrente instance type depending in drug name", () => {
    const testInput = [
      DrugFactory.getInstance(FERVEX, 1, 2) instanceof Fervex,
      DrugFactory.getInstance(MAGIC_PILL, 1, 2) instanceof MagicPill,
      DrugFactory.getInstance(HERBAL_TEA, 1, 2) instanceof HerbalTea,
      DrugFactory.getInstance(DAFALGAN, 1, 2) instanceof Dafalgan,
      DrugFactory.getInstance("test", 1, 2) instanceof Drug
    ];
    expect(!!testInput.find(e => e == false)).toBe(false);
  });
});
