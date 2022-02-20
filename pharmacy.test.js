import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug";
import assert from 'assert';

describe("Pharmacy", () => {
  describe("Tests sur Magic Pill", function() {
    it(`Les propriétés de Magic Pill ne bougent jamais`, () => {
      const drugs = new Pharmacy([new Drug('Magic Pill', 10, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 10);
      assert.strictEqual(drugs[0].benefit, 15);
    });
  });

  describe("Tests sur Fervex", function() {
    it(`cas commun, perd 1 en expireIn, gagne 1 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 11, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 10);
      assert.strictEqual(drugs[0].benefit, 16);
    });
  
    it(`expireIn > 10, perd 1 en expireIn, gagne 1 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 11, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 10);
      assert.strictEqual(drugs[0].benefit, 16);
    });

    it(`expireIn <= 10, perd 1 en expireIn, gagne 2 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 10, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 9);
      assert.strictEqual(drugs[0].benefit, 17);
    });
    
    it(`expireIn > 5, perd 1 en expireIn, gagne 2 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 6, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 5);
      assert.strictEqual(drugs[0].benefit, 17);
    });

    it(`expireIn <= 5, perd 1 en expireIn, gagne 3 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 1, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 0);
      assert.strictEqual(drugs[0].benefit, 18);
    });

    it(`benefit = 50, perd 1 en expireIn, ne gagne rien en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 11, 50)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 10);
      assert.strictEqual(drugs[0].benefit, 50);
    });
  
    it(`benefit = 49 et expireIn <= 10, perd 1 en expireIn, gagne 1 en benefit (stop à 50)`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 10, 49)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 9);
      assert.strictEqual(drugs[0].benefit, 50);
    });
    
    it(`benefit = 48 et expireIn <= 5, perd 1 en expireIn, gagne 2 en benefit (stop à 50)`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 1, 48)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 0);
      assert.strictEqual(drugs[0].benefit, 50);
    });

    it(`benefit = 50 et expireIn < 0, perd 1 en expireIn, benefit = 0`, () => {
      const drugs = new Pharmacy([new Drug('Fervex', 0, 50)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -1);
      assert.strictEqual(drugs[0].benefit, 0);
    });
  });

  describe("Tests sur Herbal Tea", function() {
    it(`cas commun, perd 1 en expireIn, gagne 1 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Herbal Tea', 1, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 0);
      assert.strictEqual(drugs[0].benefit, 16);
    });
    
    it(`benefit = 0, perd 1 en expireIn, gagne 2 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Herbal Tea', 0, 15)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -1);
      assert.strictEqual(drugs[0].benefit, 17);
    });
  
    it(`benefit = 50, perd 1 en expireIn, ne gagne rien en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Herbal Tea', 11, 50)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 10);
      assert.strictEqual(drugs[0].benefit, 50);
    });
  
    it(`benefit < 50 et expireIn < 0, perd 1 en expireIn, gagne 2 en benefit`, () => {
      const drugs = new Pharmacy([new Drug('Herbal Tea', -1, 30)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -2);
      assert.strictEqual(drugs[0].benefit, 32);
    });

    it(`benefit = 49 et expireIn < 0, perd 1 en expireIn, gagne 1 en benefit (max 50)`, () => {
      const drugs = new Pharmacy([new Drug('Herbal Tea', -1, 49)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -2);
      assert.strictEqual(drugs[0].benefit, 50);
    });
  });

  describe("Tests sur un medoc lambda", function() {
    it("cas commun, perd 1 en expireIn, perd 1 en benefit", () => {
      const drugs = new Pharmacy([new Drug('Doliprane', 1, 3)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, 0);
      assert.strictEqual(drugs[0].benefit, 2);
    });

    it("expireIn = 0, perd 1 en expireIn, perd 2 en benefit", () => {
      const drugs = new Pharmacy([new Drug('Doliprane', 0, 10)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -1);
      assert.strictEqual(drugs[0].benefit, 8);
    });
  
    it("expireIn < 0, perd 1 en expireIn, perd 2 en benefit", () => {
      const drugs = new Pharmacy([new Drug('Doliprane', -1, 10)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -2);
      assert.strictEqual(drugs[0].benefit, 8);
    });

    it("expireIn < 0 et benefit = 1, perd 1 en expireIn, benefit passe à 0 (minimum benefit = 0)", () => {
      const drugs = new Pharmacy([new Drug('Doliprane', -1, 1)]).updateBenefitValue();
      assert.strictEqual(drugs[0].expiresIn, -2);
      assert.strictEqual(drugs[0].benefit, 0);
    });
  });

});