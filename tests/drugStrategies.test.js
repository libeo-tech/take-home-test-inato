import {
  AbstractDrugStrategy,
  DegradingDrugStrategy,
  Doliprane,
  IncreasingDrugStrategy,
  StaticDrugStrategy
} from "../models";

describe("Drug Strategies: Abstract Drug Strategy", () => {
  it("should fail instantiating an abstract drug strategy", () => {
    try {
      new AbstractDrugStrategy();
    } catch (error) {
      expect(error.message).toEqual(
        "Cannot construct Abstract instances directly"
      );
      expect(error instanceof TypeError).toBe(true);
    }
  });
});

describe("Drug Strategies: Degrading Drug Strategy", () => {
  it("should instantiate a degrading drug strategy successfully, and check it inherits from an abstract drug strategy", () => {
    expect(new DegradingDrugStrategy() instanceof AbstractDrugStrategy).toBe(
      true
    );
  });

  it("should degrade once the benefit of a drug which has not expired yet", () => {
    const strategy = new DegradingDrugStrategy();
    const drug = new Doliprane(2, 5, strategy);
    strategy.updateBenefit(drug);
    expect(drug.benefit).toBe(4);
  });

  it("should degrade twice the benefit of a drug which has expired", () => {
    const strategy = new DegradingDrugStrategy();
    const drug = new Doliprane(0, 5, strategy);
    strategy.updateBenefit(drug);
    expect(drug.benefit).toBe(3);
  });
});

describe("Drug Strategies: Increasing Drug Strategy", () => {
  it("should instantiate an increasing drug strategy successfully, and check it inherits from an abstract drug strategy", () => {
    expect(new IncreasingDrugStrategy() instanceof AbstractDrugStrategy).toBe(
      true
    );
  });

  it("should increase once the benefit of a drug which has not expired yet", () => {
    const strategy = new IncreasingDrugStrategy();
    const drug = new Doliprane(2, 5, strategy);
    strategy.updateBenefit(drug);
    expect(drug.benefit).toBe(6);
  });

  it("should increase twice the benefit of a drug which has expired", () => {
    const strategy = new IncreasingDrugStrategy();
    const drug = new Doliprane(0, 5, strategy);
    strategy.updateBenefit(drug);
    expect(drug.benefit).toBe(7);
  });
});

describe("Drug Strategies: Static Drug Strategy", () => {
  it("should instantiate a static drug strategy successfully, and check it inherits from an abstract drug strategy", () => {
    expect(new StaticDrugStrategy() instanceof AbstractDrugStrategy).toBe(true);
  });

  it("should not change the benefit value of a drug", () => {
    const strategy = new StaticDrugStrategy();
    const drug = new Doliprane(2, 5, strategy);
    strategy.updateBenefit(drug);
    expect(drug.benefit).toBe(5);
  });

  it("should not change the expiry date of a drug", () => {
    const strategy = new StaticDrugStrategy();
    const drug = new Doliprane(2, 5, strategy);
    strategy.updateExpiryDate(drug);
    expect(drug.expiresIn).toBe(2);
  });
});
