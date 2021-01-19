import DrugFactory from "./DrugFactory";
import { FERVEX } from "./Fervex";
import { HERBAL_TEA } from "./HerbalTea";
import { MAGIC_PILL } from "./MagicPill";

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
