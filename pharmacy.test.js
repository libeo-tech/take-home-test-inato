import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should do nothing when there is no drugs", () => {
    expect(new Pharmacy().updateBenefitValue()).toMatchInlineSnapshot(
      `Array []`
    );
  });

  describe("default drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      // see https://jestjs.io/docs/snapshot-testing for documentation about
      // snapshot testing with jest
      expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue())
        .toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 2,
            "expiresIn": 1,
            "name": "test",
          },
        ]
      `);
    });
    it("should decrease the benefit and expiresIn by 1 when the expiration date has not passed", () => {
      expect(
        new Pharmacy([
          new Drug("test", { expiresIn: 1, benefit: 3 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 2,
            "expiresIn": 0,
            "name": "test",
          },
        ]
      `);
    });
    it("should decrease the benefit by 2 and expiresIn by 1 when the expiration date has passed", () => {
      expect(
        new Pharmacy([
          new Drug("test", { expiresIn: 0, benefit: 3 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 1,
            "expiresIn": -1,
            "name": "test",
          },
        ]
      `);
    });
    it("should never make the benefit negative", () => {
      expect(
        new Pharmacy([
          new Drug("test", { expiresIn: -2, benefit: 0 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 0,
            "expiresIn": -3,
            "name": "test",
          },
        ]
      `);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit by 1", () => {
      expect(
        new Pharmacy([
          new Drug("Herbal Tea", { expiresIn: 5, benefit: 8 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 9,
            "expiresIn": 4,
            "name": "Herbal Tea",
          },
        ]
      `);
    });
    it("should increase the benefit by 2 when the expiration date has passed", () => {
      expect(
        new Pharmacy([
          new Drug("Herbal Tea", { expiresIn: 0, benefit: 48 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 50,
            "expiresIn": -1,
            "name": "Herbal Tea",
          },
        ]
      `);
    });
    it("should increase the benefit by 1 when the expiration date has passed and benefit is 49", () => {
      expect(
        new Pharmacy([
          new Drug("Herbal Tea", { expiresIn: 0, benefit: 49 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 50,
            "expiresIn": -1,
            "name": "Herbal Tea",
          },
        ]
      `);
    });
    it("should never increase the benefit above 50", () => {
      expect(
        new Pharmacy([
          new Drug("Herbal Tea", { expiresIn: 4, benefit: 50 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 50,
            "expiresIn": 3,
            "name": "Herbal Tea",
          },
        ]
      `);
    });
  });

  describe("Magic Pill", () => {
    it("should never expires nor decrease in benefit", () => {
      expect(
        new Pharmacy([
          new Drug("Magic Pill", { expiresIn: 2, benefit: 15 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 15,
            "expiresIn": 2,
            "name": "Magic Pill",
          },
        ]
      `);
    });
    it("should never expires nor decrease in benefit when the expiration date has passed", () => {
      expect(
        new Pharmacy([
          new Drug("Magic Pill", { expiresIn: -1, benefit: 15 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 15,
            "expiresIn": -1,
            "name": "Magic Pill",
          },
        ]
      `);
    });
  });

  describe("Fervex", () => {
    it("should increase in benefit by 1 when the expiration date is in more than 10 days", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 11, benefit: 15 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 16,
            "expiresIn": 10,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should increase in benefit by 2 when the expiration date is in 10 days", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 10, benefit: 15 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 17,
            "expiresIn": 9,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should increase in benefit by 2 when the expiration date is in less than 10 days but more than 5", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 6, benefit: 20 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 22,
            "expiresIn": 5,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should increase in benefit by 1 when the expiration date is in less than 10 days but more than 5 and benefit is 49", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 6, benefit: 49 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 50,
            "expiresIn": 5,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should increase in benefit by 3 when the expiration date is in 5 days", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 5, benefit: 15 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 18,
            "expiresIn": 4,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should increase in benefit by 3 when the expiration date is in less than 5 days", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 1, benefit: 10 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 13,
            "expiresIn": 0,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should increase in benefit by 1 when the expiration date is in less than 5 days and benefit is 48", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 1, benefit: 48 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 50,
            "expiresIn": 0,
            "name": "Fervex",
          },
        ]
      `);
    });
    it("should set benefit to 0 when it expires", () => {
      expect(
        new Pharmacy([
          new Drug("Fervex", { expiresIn: 0, benefit: 10 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 0,
            "expiresIn": -1,
            "name": "Fervex",
          },
        ]
      `);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease the benefit by 2", () => {
      expect(
        new Pharmacy([
          new Drug("Dafalgan", { expiresIn: 2, benefit: 15 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 13,
            "expiresIn": 1,
            "name": "Dafalgan",
          },
        ]
      `);
    });
    it("should decrease the benefit by 4 when the expiration date has passed", () => {
      expect(
        new Pharmacy([
          new Drug("Dafalgan", { expiresIn: 0, benefit: 10 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 6,
            "expiresIn": -1,
            "name": "Dafalgan",
          },
        ]
      `);
    });
    it("should decrease the benefit by 3 when the expiration date has passed and benefit is 3", () => {
      expect(
        new Pharmacy([
          new Drug("Dafalgan", { expiresIn: -1, benefit: 3 })
        ]).updateBenefitValue()
      ).toMatchInlineSnapshot(`
        Array [
          Drug {
            "benefit": 0,
            "expiresIn": -2,
            "name": "Dafalgan",
          },
        ]
      `);
    });
  });
});

describe("Drug", () => {
  it("should accept benefit and expiresIn as two arguments", () => {
    /* GIVEN */
    const benefit = 8;
    const expiresIn = 15;
    /* WHEN */
    const drug = new Drug("test", expiresIn, benefit);
    /* THEN */
    expect(drug.benefit).toBe(benefit);
    expect(drug.expiresIn).toBe(expiresIn);
  });

  it("should accept benefit and expiresIn as an object", () => {
    /* GIVEN */
    const benefit = 8;
    const expiresIn = 15;
    /* WHEN */
    const drug = new Drug("test", { expiresIn, benefit });
    /* THEN */
    expect(drug.benefit).toBe(benefit);
    expect(drug.expiresIn).toBe(expiresIn);
  });
});
