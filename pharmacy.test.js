import { computeLogs } from "./computeLogs";
import { Drug, Pharmacy } from "./pharmacy";

describe("Black box testing", () => {
  it("should descrease Doliprane, Herbal Tea, Fervex, Magic Pill for 30 days ", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 30);

    expect(log).toEqual([
      '[{"name":"Doliprane","expiresIn":19,"benefit":29},{"name":"Herbal Tea","expiresIn":9,"benefit":6},{"name":"Fervex","expiresIn":4,"benefit":43},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":18,"benefit":28},{"name":"Herbal Tea","expiresIn":8,"benefit":7},{"name":"Fervex","expiresIn":3,"benefit":46},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":17,"benefit":27},{"name":"Herbal Tea","expiresIn":7,"benefit":8},{"name":"Fervex","expiresIn":2,"benefit":49},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":16,"benefit":26},{"name":"Herbal Tea","expiresIn":6,"benefit":9},{"name":"Fervex","expiresIn":1,"benefit":50},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":15,"benefit":25},{"name":"Herbal Tea","expiresIn":5,"benefit":10},{"name":"Fervex","expiresIn":0,"benefit":50},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":14,"benefit":24},{"name":"Herbal Tea","expiresIn":4,"benefit":11},{"name":"Fervex","expiresIn":-1,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":13,"benefit":23},{"name":"Herbal Tea","expiresIn":3,"benefit":12},{"name":"Fervex","expiresIn":-2,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":12,"benefit":22},{"name":"Herbal Tea","expiresIn":2,"benefit":13},{"name":"Fervex","expiresIn":-3,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":11,"benefit":21},{"name":"Herbal Tea","expiresIn":1,"benefit":14},{"name":"Fervex","expiresIn":-4,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":10,"benefit":20},{"name":"Herbal Tea","expiresIn":0,"benefit":15},{"name":"Fervex","expiresIn":-5,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":9,"benefit":19},{"name":"Herbal Tea","expiresIn":-1,"benefit":17},{"name":"Fervex","expiresIn":-6,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":8,"benefit":18},{"name":"Herbal Tea","expiresIn":-2,"benefit":19},{"name":"Fervex","expiresIn":-7,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":7,"benefit":17},{"name":"Herbal Tea","expiresIn":-3,"benefit":21},{"name":"Fervex","expiresIn":-8,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":6,"benefit":16},{"name":"Herbal Tea","expiresIn":-4,"benefit":23},{"name":"Fervex","expiresIn":-9,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":5,"benefit":15},{"name":"Herbal Tea","expiresIn":-5,"benefit":25},{"name":"Fervex","expiresIn":-10,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":4,"benefit":14},{"name":"Herbal Tea","expiresIn":-6,"benefit":27},{"name":"Fervex","expiresIn":-11,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":3,"benefit":13},{"name":"Herbal Tea","expiresIn":-7,"benefit":29},{"name":"Fervex","expiresIn":-12,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":2,"benefit":12},{"name":"Herbal Tea","expiresIn":-8,"benefit":31},{"name":"Fervex","expiresIn":-13,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":1,"benefit":11},{"name":"Herbal Tea","expiresIn":-9,"benefit":33},{"name":"Fervex","expiresIn":-14,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":0,"benefit":10},{"name":"Herbal Tea","expiresIn":-10,"benefit":35},{"name":"Fervex","expiresIn":-15,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-1,"benefit":8},{"name":"Herbal Tea","expiresIn":-11,"benefit":37},{"name":"Fervex","expiresIn":-16,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-2,"benefit":6},{"name":"Herbal Tea","expiresIn":-12,"benefit":39},{"name":"Fervex","expiresIn":-17,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-3,"benefit":4},{"name":"Herbal Tea","expiresIn":-13,"benefit":41},{"name":"Fervex","expiresIn":-18,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-4,"benefit":2},{"name":"Herbal Tea","expiresIn":-14,"benefit":43},{"name":"Fervex","expiresIn":-19,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-5,"benefit":0},{"name":"Herbal Tea","expiresIn":-15,"benefit":45},{"name":"Fervex","expiresIn":-20,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-6,"benefit":0},{"name":"Herbal Tea","expiresIn":-16,"benefit":47},{"name":"Fervex","expiresIn":-21,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-7,"benefit":0},{"name":"Herbal Tea","expiresIn":-17,"benefit":49},{"name":"Fervex","expiresIn":-22,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-8,"benefit":0},{"name":"Herbal Tea","expiresIn":-18,"benefit":50},{"name":"Fervex","expiresIn":-23,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-9,"benefit":0},{"name":"Herbal Tea","expiresIn":-19,"benefit":50},{"name":"Fervex","expiresIn":-24,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":-10,"benefit":0},{"name":"Herbal Tea","expiresIn":-20,"benefit":50},{"name":"Fervex","expiresIn":-25,"benefit":0},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
    ]);
  });

  it("should descrease Doliprane, Herbal Tea, Fervex, Magic Pill for 1 day ", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 1);

    expect(log).toEqual([
      '[{"name":"Doliprane","expiresIn":19,"benefit":29},{"name":"Herbal Tea","expiresIn":9,"benefit":6},{"name":"Fervex","expiresIn":4,"benefit":43},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
    ]);
  });

  it("should descrease Doliprane, Herbal Tea, Fervex, Magic Pill for 2 days ", () => {
    const drugs = [
      new Drug("Doliprane", 20, 30),
      new Drug("Herbal Tea", 10, 5),
      new Drug("Fervex", 5, 40),
      new Drug("Magic Pill", 15, 40),
    ];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 2);

    expect(log).toEqual([
      '[{"name":"Doliprane","expiresIn":19,"benefit":29},{"name":"Herbal Tea","expiresIn":9,"benefit":6},{"name":"Fervex","expiresIn":4,"benefit":43},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
      '[{"name":"Doliprane","expiresIn":18,"benefit":28},{"name":"Herbal Tea","expiresIn":8,"benefit":7},{"name":"Fervex","expiresIn":3,"benefit":46},{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
    ]);
  });

  it("should descrease Doliprane, for 1 days ", () => {
    const drugs = [new Drug("Doliprane", 20, 30)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 1);

    expect(log).toEqual(['[{"name":"Doliprane","expiresIn":19,"benefit":29}]']);
  });

  it("should descrease Herbal Tea, for 1 days ", () => {
    const drugs = [new Drug("Herbal Tea", 10, 5)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 1);

    expect(log).toEqual(['[{"name":"Herbal Tea","expiresIn":9,"benefit":6}]']);
  });

  it("should descrease fervex, for 1 days ", () => {
    const drugs = [new Drug("Fervex", 5, 40)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 1);

    expect(log).toEqual(['[{"name":"Fervex","expiresIn":4,"benefit":43}]']);
  });

  it("should descrease Magic Pill, for 1 days ", () => {
    const drugs = [new Drug("Magic Pill", 15, 40)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 1);

    expect(log).toEqual([
      '[{"name":"Magic Pill","expiresIn":15,"benefit":40}]',
    ]);
  });
});

describe("doliprane testing", () => {
  it("should descrease Doliprane for 1 days ", () => {
    const drugs = [new Drug("Doliprane", 20, 30)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 1);

    expect(log).toEqual(['[{"name":"Doliprane","expiresIn":19,"benefit":29}]']);
  });

  it("should descrease Doliprane for 2 days ", () => {
    const drugs = [new Drug("Doliprane", 20, 30)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 2);

    expect(log).toEqual([
      '[{"name":"Doliprane","expiresIn":19,"benefit":29}]',
      '[{"name":"Doliprane","expiresIn":18,"benefit":28}]',
    ]);
  });

  it("should descrease Doliprane for 21 days ", () => {
    const drugs = [new Drug("Doliprane", 20, 30)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 21);

    expect(log).toEqual([
      '[{"name":"Doliprane","expiresIn":19,"benefit":29}]',
      '[{"name":"Doliprane","expiresIn":18,"benefit":28}]',
      '[{"name":"Doliprane","expiresIn":17,"benefit":27}]',
      '[{"name":"Doliprane","expiresIn":16,"benefit":26}]',
      '[{"name":"Doliprane","expiresIn":15,"benefit":25}]',
      '[{"name":"Doliprane","expiresIn":14,"benefit":24}]',
      '[{"name":"Doliprane","expiresIn":13,"benefit":23}]',
      '[{"name":"Doliprane","expiresIn":12,"benefit":22}]',
      '[{"name":"Doliprane","expiresIn":11,"benefit":21}]',
      '[{"name":"Doliprane","expiresIn":10,"benefit":20}]',
      '[{"name":"Doliprane","expiresIn":9,"benefit":19}]',
      '[{"name":"Doliprane","expiresIn":8,"benefit":18}]',
      '[{"name":"Doliprane","expiresIn":7,"benefit":17}]',
      '[{"name":"Doliprane","expiresIn":6,"benefit":16}]',
      '[{"name":"Doliprane","expiresIn":5,"benefit":15}]',
      '[{"name":"Doliprane","expiresIn":4,"benefit":14}]',
      '[{"name":"Doliprane","expiresIn":3,"benefit":13}]',
      '[{"name":"Doliprane","expiresIn":2,"benefit":12}]',
      '[{"name":"Doliprane","expiresIn":1,"benefit":11}]',
      '[{"name":"Doliprane","expiresIn":0,"benefit":10}]',
      '[{"name":"Doliprane","expiresIn":-1,"benefit":8}]',
    ]);
  });

  it("should descrease Doliprane for 30 days ", () => {
    const drugs = [new Drug("Doliprane", 20, 30)];
    const trial = new Pharmacy(drugs);

    const log = computeLogs(trial, 30);

    expect(log).toEqual([
      '[{"name":"Doliprane","expiresIn":19,"benefit":29}]',
      '[{"name":"Doliprane","expiresIn":18,"benefit":28}]',
      '[{"name":"Doliprane","expiresIn":17,"benefit":27}]',
      '[{"name":"Doliprane","expiresIn":16,"benefit":26}]',
      '[{"name":"Doliprane","expiresIn":15,"benefit":25}]',
      '[{"name":"Doliprane","expiresIn":14,"benefit":24}]',
      '[{"name":"Doliprane","expiresIn":13,"benefit":23}]',
      '[{"name":"Doliprane","expiresIn":12,"benefit":22}]',
      '[{"name":"Doliprane","expiresIn":11,"benefit":21}]',
      '[{"name":"Doliprane","expiresIn":10,"benefit":20}]',
      '[{"name":"Doliprane","expiresIn":9,"benefit":19}]',
      '[{"name":"Doliprane","expiresIn":8,"benefit":18}]',
      '[{"name":"Doliprane","expiresIn":7,"benefit":17}]',
      '[{"name":"Doliprane","expiresIn":6,"benefit":16}]',
      '[{"name":"Doliprane","expiresIn":5,"benefit":15}]',
      '[{"name":"Doliprane","expiresIn":4,"benefit":14}]',
      '[{"name":"Doliprane","expiresIn":3,"benefit":13}]',
      '[{"name":"Doliprane","expiresIn":2,"benefit":12}]',
      '[{"name":"Doliprane","expiresIn":1,"benefit":11}]',
      '[{"name":"Doliprane","expiresIn":0,"benefit":10}]',
      '[{"name":"Doliprane","expiresIn":-1,"benefit":8}]',
      '[{"name":"Doliprane","expiresIn":-2,"benefit":6}]',
      '[{"name":"Doliprane","expiresIn":-3,"benefit":4}]',
      '[{"name":"Doliprane","expiresIn":-4,"benefit":2}]',
      '[{"name":"Doliprane","expiresIn":-5,"benefit":0}]',
      '[{"name":"Doliprane","expiresIn":-6,"benefit":0}]',
      '[{"name":"Doliprane","expiresIn":-7,"benefit":0}]',
      '[{"name":"Doliprane","expiresIn":-8,"benefit":0}]',
      '[{"name":"Doliprane","expiresIn":-9,"benefit":0}]',
      '[{"name":"Doliprane","expiresIn":-10,"benefit":0}]',
    ]);
  });
});

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});
