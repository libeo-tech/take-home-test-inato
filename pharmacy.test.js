import { updateBenefitValue } from "./pharmacy";

describe("Doliprane", () => {
  it("Benifit should decrease by one", () => {
    const input = [
      {
        name: "Doliprane",
        expiresIn: 20,
        benefit: 30
      }
    ];

    const expectedOutput = [
      {
        name: "Doliprane",
        expiresIn: 19,
        benefit: 29
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should decrease twice as fast after expiration", () => {
    const input = [
      {
        name: "Doliprane",
        expiresIn: 0,
        benefit: 30
      }
    ];

    const expectedOutput = [
      {
        name: "Doliprane",
        expiresIn: -1,
        benefit: 28
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should not be negative", () => {
    const input = [
      {
        name: "Doliprane",
        expiresIn: 0,
        benefit: 0
      }
    ];

    const expectedOutput = [
      {
        name: "Doliprane",
        expiresIn: -1,
        benefit: 0
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe("Herbal Tea", () => {
  it("Benifit should increase by one", () => {
    const input = [
      {
        name: "Herbal Tea",
        expiresIn: 10,
        benefit: 5
      }
    ];

    const expectedOutput = [
      {
        name: "Herbal Tea",
        expiresIn: 9,
        benefit: 6
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should increase twice as fast after expiration", () => {
    const input = [
      {
        name: "Herbal Tea",
        expiresIn: 0,
        benefit: 5
      }
    ];

    const expectedOutput = [
      {
        name: "Herbal Tea",
        expiresIn: -1,
        benefit: 7
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should not go over MAX_BENEFIT", () => {
    const input = [
      {
        name: "Herbal Tea",
        expiresIn: -4,
        benefit: 50
      }
    ];

    const expectedOutput = [
      {
        name: "Herbal Tea",
        expiresIn: -5,
        benefit: 50
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe("Fervex", () => {
  it("Benifit should increase by one", () => {
    const input = [
      {
        name: "Fervex",
        expiresIn: 50,
        benefit: 40
      }
    ];

    const expectedOutput = [
      {
        name: "Fervex",
        expiresIn: 49,
        benefit: 41
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should increase twice as fast 10 days before expiration", () => {
    const input = [
      {
        name: "Fervex",
        expiresIn: 10,
        benefit: 40
      }
    ];

    const expectedOutput = [
      {
        name: "Fervex",
        expiresIn: 9,
        benefit: 42
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should increase 3 times as fast 5 days before expiration", () => {
    const input = [
      {
        name: "Fervex",
        expiresIn: 5,
        benefit: 40
      }
    ];

    const expectedOutput = [
      {
        name: "Fervex",
        expiresIn: 4,
        benefit: 43
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Benifit should be MIN_BENEFIT after expiration", () => {
    const input = [
      {
        name: "Fervex",
        expiresIn: 0,
        benefit: 50
      }
    ];

    const expectedOutput = [
      {
        name: "Fervex",
        expiresIn: -1,
        benefit: 0
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe("Magic Pilll", () => {
  it("Should stay the same", () => {
    const input = [
      {
        name: "Magic Pill",
        expiresIn: 15,
        benefit: 40
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(input);
  });
});

describe("Defalgan", () => {
  it("Should stay decrease twice as fast", () => {
    const input = [
      {
        name: "Dafalgan",
        expiresIn: 21,
        benefit: 42
      }
    ];

    const expectedOutput = [
      {
        name: "Dafalgan",
        expiresIn: 20,
        benefit: 40
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });

  it("Should stay not be less than MIN_BENEFIT", () => {
    const input = [
      {
        name: "Dafalgan",
        expiresIn: 20,
        benefit: 1
      }
    ];

    const expectedOutput = [
      {
        name: "Dafalgan",
        expiresIn: 19,
        benefit: 0
      }
    ];

    const output = updateBenefitValue(input);
    expect(output).toEqual(expectedOutput);
  });
});
