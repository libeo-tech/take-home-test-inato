import { Doliprane } from "../src/models/Drugs";

describe("Doliprane", () => {
  it("should decrease the benefit and expiresIn", () => {
    const dolipraneCalculated = new Doliprane(2, 3).toNextDay();
    const dolipraneClean = new Doliprane(1, 2);

    expect(dolipraneCalculated.benefit).toEqual(dolipraneClean.benefit);
    expect(dolipraneCalculated.expiresIn).toEqual(dolipraneClean.expiresIn);
  });

  
  it("should decrease the expiresIn but not benefit if already 0", () => {
    const dolipraneCalculated = new Doliprane(2, 0).toNextDay();
    const dolipraneClean = new Doliprane(1, 0);

    expect(dolipraneCalculated.benefit).toEqual(dolipraneClean.benefit);
    expect(dolipraneCalculated.expiresIn).toEqual(dolipraneClean.expiresIn);
  });

    
  it("should degrades benefit twice as fast once the expiration date has passed", () => {
    const dolipraneCalculated = new Doliprane(0, 2).toNextDay();
    const dolipraneClean = new Doliprane(-1, 0);

    expect(dolipraneCalculated.benefit).toEqual(dolipraneClean.benefit);
    expect(dolipraneCalculated.expiresIn).toEqual(dolipraneClean.expiresIn);
  });

});
