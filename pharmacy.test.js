import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  /*
  * Global Test
  * */
  
  describe("Global test", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
          [new Drug("test", 1, 2)]
      );
    });
  
    it("should be equal to default output", () => {
      const defaultOutput =
          '[{"name":"Doliprane","expiresIn":19,"benefit":29},{"name":"Herbal Tea","expiresIn":9,"benefit":6},{"name":"Fervex","expiresIn":4,"benefit":43},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":18,"benefit":28},{"name":"Herbal Tea","expiresIn":8,"benefit":7},{"name":"Fervex","expiresIn":3,"benefit":46},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":17,"benefit":27},{"name":"Herbal Tea","expiresIn":7,"benefit":8},{"name":"Fervex","expiresIn":2,"benefit":49},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":16,"benefit":26},{"name":"Herbal Tea","expiresIn":6,"benefit":9},{"name":"Fervex","expiresIn":1,"benefit":50},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":15,"benefit":25},{"name":"Herbal Tea","expiresIn":5,"benefit":10},{"name":"Fervex","expiresIn":0,"benefit":50},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":14,"benefit":24},{"name":"Herbal Tea","expiresIn":4,"benefit":11},{"name":"Fervex","expiresIn":-1,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":13,"benefit":23},{"name":"Herbal Tea","expiresIn":3,"benefit":12},{"name":"Fervex","expiresIn":-2,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":12,"benefit":22},{"name":"Herbal Tea","expiresIn":2,"benefit":13},{"name":"Fervex","expiresIn":-3,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":11,"benefit":21},{"name":"Herbal Tea","expiresIn":1,"benefit":14},{"name":"Fervex","expiresIn":-4,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":10,"benefit":20},{"name":"Herbal Tea","expiresIn":0,"benefit":15},{"name":"Fervex","expiresIn":-5,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":9,"benefit":19},{"name":"Herbal Tea","expiresIn":-1,"benefit":17},{"name":"Fervex","expiresIn":-6,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":8,"benefit":18},{"name":"Herbal Tea","expiresIn":-2,"benefit":19},{"name":"Fervex","expiresIn":-7,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":7,"benefit":17},{"name":"Herbal Tea","expiresIn":-3,"benefit":21},{"name":"Fervex","expiresIn":-8,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":6,"benefit":16},{"name":"Herbal Tea","expiresIn":-4,"benefit":23},{"name":"Fervex","expiresIn":-9,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":5,"benefit":15},{"name":"Herbal Tea","expiresIn":-5,"benefit":25},{"name":"Fervex","expiresIn":-10,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":4,"benefit":14},{"name":"Herbal Tea","expiresIn":-6,"benefit":27},{"name":"Fervex","expiresIn":-11,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":3,"benefit":13},{"name":"Herbal Tea","expiresIn":-7,"benefit":29},{"name":"Fervex","expiresIn":-12,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":2,"benefit":12},{"name":"Herbal Tea","expiresIn":-8,"benefit":31},{"name":"Fervex","expiresIn":-13,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":1,"benefit":11},{"name":"Herbal Tea","expiresIn":-9,"benefit":33},{"name":"Fervex","expiresIn":-14,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":0,"benefit":10},{"name":"Herbal Tea","expiresIn":-10,"benefit":35},{"name":"Fervex","expiresIn":-15,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-1,"benefit":8},{"name":"Herbal Tea","expiresIn":-11,"benefit":37},{"name":"Fervex","expiresIn":-16,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-2,"benefit":6},{"name":"Herbal Tea","expiresIn":-12,"benefit":39},{"name":"Fervex","expiresIn":-17,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-3,"benefit":4},{"name":"Herbal Tea","expiresIn":-13,"benefit":41},{"name":"Fervex","expiresIn":-18,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-4,"benefit":2},{"name":"Herbal Tea","expiresIn":-14,"benefit":43},{"name":"Fervex","expiresIn":-19,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-5,"benefit":0},{"name":"Herbal Tea","expiresIn":-15,"benefit":45},{"name":"Fervex","expiresIn":-20,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-6,"benefit":0},{"name":"Herbal Tea","expiresIn":-16,"benefit":47},{"name":"Fervex","expiresIn":-21,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-7,"benefit":0},{"name":"Herbal Tea","expiresIn":-17,"benefit":49},{"name":"Fervex","expiresIn":-22,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-8,"benefit":0},{"name":"Herbal Tea","expiresIn":-18,"benefit":50},{"name":"Fervex","expiresIn":-23,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-9,"benefit":0},{"name":"Herbal Tea","expiresIn":-19,"benefit":50},{"name":"Fervex","expiresIn":-24,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}],[{"name":"Doliprane","expiresIn":-10,"benefit":0},{"name":"Herbal Tea","expiresIn":-20,"benefit":50},{"name":"Fervex","expiresIn":-25,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]';
    
      const drugs = [
        new Drug("Doliprane", 20, 30),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 5, 40),
        new Drug("Magic Pill", 15, 40),
      ];
      const trial = new Pharmacy(drugs);
      const log = [];
    
      for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
        log.push(JSON.stringify(trial.updateBenefitValue()));
      }
    
      expect(log.toString()).toEqual(defaultOutput);
    });
  })
  
  /*
  * Test Doliprane
  * */
  
  describe("Doliprane test", () => {
    it("Doliprane with expiresIn > 0 should decrease by 1", () => {
      const drug = new Drug("Doliprane", 20, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Doliprane", 19, 9);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Doliprane with expiresIn < 0 should decrease by 2", () => {
      const drug = new Drug("Doliprane", -2, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Doliprane", -3, 8);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Doliprane with expiresIn < 0 should not go under 0", () => {
      const drug = new Drug("Doliprane", -2, 0);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Doliprane", -3, 0);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  })
  
  /*
  * Test Herbal Tea
  * */
  
  describe("Herbal Tea test", () => {
    it("Herbal Tea with expiresIn > 0 should increase by 1", () => {
      const drug = new Drug("Herbal Tea", 20, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Herbal Tea", 19, 11);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Herbal Tea with expiresIn < 0 should increase by 2", () => {
      const drug = new Drug("Herbal Tea", -2, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Herbal Tea", -3, 12);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Herbal Tea with expiresIn > 0 should not go more than 50", () => {
      const drug = new Drug("Herbal Tea", 10, 49);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Herbal Tea", 9, 50);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Herbal Tea benefit should not go more than 50", () => {
      const drug = new Drug("Herbal Tea", -2, 49);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Herbal Tea", -3, 50);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  })
  
  /*
  * Test Fervex
  * */
  
  describe("Fervex Test", () => {
    it("Fervex with expiresIn > 10 should increase by 1", () => {
      const drug = new Drug("Fervex", 20, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Fervex", 19, 11);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Fervex with expiresIn <= 10 and expiresIn > 5 should increase by 2", () => {
      const drug = new Drug("Fervex", 8, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Fervex", 7, 12);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Fervex with expiresIn <= 5 and expiresIn > 0 should increase by 3", () => {
      const drug = new Drug("Fervex", 3, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Fervex", 2, 13);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Fervex with expiresIn <= 5 and expiresIn > 0 should increase by 3", () => {
      const drug = new Drug("Fervex", 3, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Fervex", 2, 13);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Fervex with expiresIn < 0 should be equal to 0", () => {
      const drug = new Drug("Fervex", 0, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Fervex", -1, 0);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Fervex benefit should not go more than 50", () => {
      const drug = new Drug("Fervex", 30, 50);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Fervex", 29, 50);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
    
  })
  
  /*
  * Test Magic Pill
  * */
  
  describe("Magic Pill test", () => {
    it("Magic Pill nothing have to change", () => {
      const drug = new Drug("Magic Pill", 15, 40);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Magic Pill", 15, 40);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  })
  
  /*
  * Test Dafalgan
  * */
  
  describe("Dafalgan test", () => {
    it("Dafalgan with expiresIn > 0 should decrease by 2", () => {
      const drug = new Drug("Dafalgan", 20, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Dafalgan", 19, 8);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Dafalgan with expiresIn > 0 should decrease by 2", () => {
      const drug = new Drug("Dafalgan", 20, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
    
      const wantedDrug = new Drug("Dafalgan", 19, 8);
      const wantedRes = [wantedDrug];
    
      expect(res).toEqual(wantedRes);
    });
  
    it("Dafalgan with expiresIn < 0 should decrease by 4", () => {
      const drug = new Drug("Dafalgan", -2, 10);
      const res = new Pharmacy([drug]).updateBenefitValue();
      const wantedDrug = new Drug("Dafalgan", -3, 6);
      const wantedRes = [wantedDrug];
      expect(res).toEqual(wantedRes);
    });
  
    it("Dafalgan with expiresIn < 0 should not go under 0", () => {
      const drug = new Drug("Dafalgan", -2, 2);
      const res = new Pharmacy([drug]).updateBenefitValue();
      const wantedDrug = new Drug("Dafalgan", -3, 0);
      const wantedRes = [wantedDrug];
      expect(res).toEqual(wantedRes);
    });
  })
});
