import { Drug, DafalganDrug, HerbalDrug, NoExpirationDrug, FervexDrug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn by one", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit by two and expiresIn by one", () => {
    expect(new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 1)]
    );
  });
});

// Herbal drugs
describe("Pharmacy", () => {
  it("should do benefit+1 and expiresIn-1", () => {
    expect(new Pharmacy([new HerbalDrug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 4)]
    );
  });
});

describe("Pharmacy", () => {
  it("should do benefit+2 and expiresIn-1", () => {
    expect(new Pharmacy([new HerbalDrug("test", -1, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 8)]
    );
  });
});

// Drugs without expiration date
describe("Pharmacy", () => {
  it("should not modify benefit and expiresIn", () => {
    expect(new Pharmacy([new NoExpirationDrug("test", -1, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 6)]
    );
  });
});

// Drugs like Fervex
describe("Pharmacy", () => {
  it("should do benefit+1 and expiresIn-1", () => {
    expect(new Pharmacy([new FervexDrug("test", 12, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", 11, 7)]
    );
  });
});

describe("Pharmacy", () => {
  it("should do benefit+2 and expiresIn-1", () => {
    expect(new Pharmacy([new FervexDrug("test", 8, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", 7, 8)]
    );
  });
});

describe("Pharmacy", () => {
  it("should do benefit+2 and expiresIn-1", () => {
    expect(new Pharmacy([new FervexDrug("test", 3, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", 2, 9)]
    );
  });
});

describe("Pharmacy", () => {
  it("should do benefit+2 and expiresIn-1", () => {
    expect(new Pharmacy([new FervexDrug("test", -1, 6)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 0)]
    );
  });
});


// Daphalgan type drug
let daphalganDegradation = function() {
    if (this.expiresIn < 0) {
        this.benefit -= 4;
    }
    else {
        this.benefit -= 2;
    }
}

describe("Pharmacy", () => {
  it("should do benefit+2 and expiresIn-1", () => {
    expect(new Pharmacy([new DafalganDrug("Dafalgan", -1, 6)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 2)]
    );
  });
});

describe("Pharmacy", () => {
  it("should do benefit+2 and expiresIn-1", () => {
    expect(new Pharmacy([new DafalganDrug("Dafalgan", 1, 6)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 4)]
    );
  });
});

