import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("check on drug property", () => {
    expect(new Drug("test", 10, 5).name).toEqual("test");
    expect(new Drug("Doliprane", 10, 5).name).toEqual("Doliprane");
    expect(new Drug("Herbal Tea", 10, 5).name).toEqual("Herbal Tea");
    expect(new Drug("Fervex", 10, 5).name).toEqual("Fervex");
    expect(new Drug("Magic Pill", 10, 5).name).toEqual("Magic Pill");
    expect(new Drug("Dafalgan", 10, 5).name).toEqual("Dafalgan");
    expect(new Drug("test", 10, 5).benefit).toEqual(5);
    expect(new Drug("test", 10, 5).expiresIn).toEqual(10);
  })

    expect(new Pharmacy([]).drugs).toEqual([])
  });

  it("should decrease in benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)])
      .updateBenefitValue())
      .toEqual([new Drug("test", 1, 2)]);
  });

  it("should return 10 elements", () => {
    expect(new Pharmacy([
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                          new Drug("test", 2, 3),
                        ])
    .updateBenefitValue()).toHaveLength(10);
  })

  it("benefit value should be between 0 and 50", () => {
    expect(new Drug("test", 2, 53).benefit).toEqual(50);
  

    expect(new Drug("test", 2, -20).benefit).toEqual(0);
  })
});


describe("Generic drugs", () => {
  it("ExpiresIn should decrease", () => {
    expect(new Pharmacy([new Drug('test', 10, 1)])
    .updateBenefitValue())
    .toEqual([new Drug('test', 9, 0)]);
  })

  it("Benefit should decrease by one unit", () => {
    expect(new Pharmacy([new Drug('test', 10, 1)])
    .updateBenefitValue())
    .toEqual([new Drug('test', 9, 0)]);
  })

  it("should decrease twice as fast when expiration date has passed", () => {
    expect(new Pharmacy([new Drug('Doliprane', -1, 2)])
      .updateBenefitValue())
      .toEqual([new Drug('Doliprane', -2, 0)]);
  })

  it("should never be lesser than 0 in benefit", () => {
      expect(new Pharmacy([new Drug('test', 5, 0)])
      .updateBenefitValue())
      .toEqual([new Drug('test', 4, 0)]);
  })
})

describe("Herbal Tea", () => {
  it("should increase in benefit the older it gets", () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 10, 9)])
    .updateBenefitValue())
    .toEqual([new Drug('Herbal Tea', 9, 10)]);
  })

  it("should increase in benefit by two unit after expiration date", () => {
    expect(new Pharmacy([new Drug('Herbal Tea', -1, 10)])
    .updateBenefitValue())
    .toEqual([new Drug('Herbal Tea', -2, 12)]);
  })

  it("should not be greater than 50 in benefit", () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 10, 50)])
    .updateBenefitValue())
    .toEqual([new Drug('Herbal Tea', 9, 50)]);

    expect(new Pharmacy([new Drug('Herbal Tea', -9, 49)])
    .updateBenefitValue())
    .toEqual([new Drug('Herbal Tea', -10, 50)]);
  })
})

describe("Fervex", () => {
  it("should increase in benefit the older it gets", () => {
    expect(new Pharmacy([new Drug('Fervex', 20, 9)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', 19, 10)]);
  })

  it("should increase by one unit before 10 days expiration date", () => {
    expect(new Pharmacy([new Drug('Fervex', 15, 9)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', 14, 10)]);
  })

  it("should increase by two unit after 10 days expiration date", () => {
    expect(new Pharmacy([new Drug('Fervex', 10, 10)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', 9, 12)]);

    expect(new Pharmacy([new Drug('Fervex', 6, 8)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', 5, 10)]);
  })

  it("should increase by three unit after 5 days expiration date", () => {
    expect(new Pharmacy([new Drug('Fervex', 5, 10)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', 4, 13)]);

    expect(new Pharmacy([new Drug('Fervex', 2, 5)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', 1, 8)]);
  })

  it("should drop to 0 after expiration date", () => {
    expect(new Pharmacy([new Drug('Fervex', 0, 10)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', -1, 0)]);

    expect(new Pharmacy([new Drug('Fervex', -4, 0)])
    .updateBenefitValue())
    .toEqual([new Drug('Fervex', -5, 0)]);
  })
})


describe("Magic Pill", () => {
  it("should not increase or decrease expiresIn", () => {
    expect(new Pharmacy([new Drug('Magic Pill', 20, 40)])
    .updateBenefitValue())
    .toEqual([new Drug('Magic Pill', 20, 40)]);
  })

  it("should not increase or decrease in benefit", () => {
    expect(new Pharmacy([new Drug('Magic Pill', 20, 10)])
    .updateBenefitValue())
    .toEqual([new Drug('Magic Pill', 20, 10)]);
  })
})

describe("Dafalgan", () => {
  it ("should not be lesser than 0", () => {
    expect(new Pharmacy([new Drug('Dafalgan', 0, 1)])
    .updateBenefitValue())
    .toEqual([new Drug('Dafalgan', -1, 0)]);

    expect(new Pharmacy([new Drug('Dafalgan', 2, 0)])
    .updateBenefitValue())
    .toEqual([new Drug('Dafalgan', 1, 0)]);
  })

  it("should decrease benefit by two unit", () => {
    expect(new Pharmacy([new Drug('Dafalgan', 20, 10)])
    .updateBenefitValue())
    .toEqual([new Drug('Dafalgan', 19, 8)]);
  })
})