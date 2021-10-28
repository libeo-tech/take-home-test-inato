import { HerbalTea } from "../../../src/models/Drugs";

describe("HerbalTea", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    const herbalTeaCalculated = new HerbalTea(2, 3).toNextDay();
    const herbalTeaClean = new HerbalTea(1, 4);

    expect(herbalTeaCalculated.benefit).toEqual(herbalTeaClean.benefit);
    expect(herbalTeaCalculated.expiresIn).toEqual(herbalTeaClean.expiresIn);
  });

  
  it("should decrease the expiresIn but not benefit if already 50", () => {
    const herbalTeaCalculated = new HerbalTea(2, 50).toNextDay();
    const herbalTeaClean = new HerbalTea(1, 50);

    expect(herbalTeaCalculated.benefit).toEqual(herbalTeaClean.benefit);
    expect(herbalTeaCalculated.expiresIn).toEqual(herbalTeaClean.expiresIn);
  });

    
  it("should increase benefit twice as fast once the expiration date has passed", () => {
    const herbalTeaCalculated = new HerbalTea(0, 2).toNextDay();
    const herbalTeaClean = new HerbalTea(-1, 4);

    expect(herbalTeaCalculated.benefit).toEqual(herbalTeaClean.benefit);
    expect(herbalTeaCalculated.expiresIn).toEqual(herbalTeaClean.expiresIn);
  });
  
});
