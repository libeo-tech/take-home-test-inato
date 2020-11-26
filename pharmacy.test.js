import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should return drugs without behaviour property", () => {
    const { behavior, ...props } = new Drug("test", 1, 2);
    expect(
      new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
    ).toEqual([props]);
  });
});

describe("Default drug", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 3);
    drug.update();
    expect(drug).toEqual(new Drug("test", 1, 2));
  });

  it("should not lower benefit below 0", () => {
    const drug = new Drug("test", 2, 0);
    drug.update();
    expect(drug).toEqual(new Drug("test", 1, 0));
  });

  it("should degrade benefit twice as fast once the expiration date has passed", () => {
    const drug = new Drug("test", 0, 5);
    drug.update();
    expect(drug).toEqual(new Drug("test", -1, 3));
  });

  it("should not increase benefit over 50", () => {
    const drug = new Drug("test", 2, 50, {
      benefit: { default: "+1" },
      expirable: true
    });
    drug.update();
    expect(drug).toEqual(
      new Drug("test", 1, 50, {
        benefit: { default: "+1" },
        expirable: true
      })
    );
  });
});

describe("Herbal Tea", () => {
  it("should increase the benefit twice as fast when expiration date has passed", () => {
    const herbalTeaNotExpired = new Drug("Herbal Tea", 2, 3, {
      benefit: { default: "+1", 0: "+2" },
      expirable: true
    });
    const herbalTeaExpired = new Drug("Herbal Tea", 0, 3, {
      benefit: { default: "+1", 0: "+2" },
      expirable: true
    });
    herbalTeaExpired.update();
    herbalTeaNotExpired.update();

    expect(herbalTeaNotExpired).toEqual(
      new Drug("Herbal Tea", 1, 4, {
        benefit: { default: "+1", 0: "+2" },
        expirable: true
      })
    );

    expect(herbalTeaExpired).toEqual(
      new Drug("Herbal Tea", -1, 5, {
        benefit: { default: "+1", 0: "+2" },
        expirable: true
      })
    );
  });
});

describe("Fervex", () => {
  it("should increase in Benefit as its expiration date approaches", () => {
    const fervexExpireMoreThan10days = new Drug("Fervex", 15, 4, {
      benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
      expirable: true
    });
    const fervexExpireLessThan10days = new Drug("Fervex", 9, 4, {
      benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
      expirable: true
    });
    const fervexExpireLessThan5days = new Drug("Fervex", 4, 4, {
      benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
      expirable: true
    });
    const fervexExpired = new Drug("Fervex", 0, 4, {
      benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
      expirable: true
    });
    fervexExpireMoreThan10days.update();
    fervexExpireLessThan10days.update();
    fervexExpireLessThan5days.update();
    fervexExpired.update();

    expect(fervexExpireMoreThan10days).toEqual(
      new Drug("Fervex", 14, 5, {
        benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
        expirable: true
      })
    );
    expect(fervexExpireLessThan10days).toEqual(
      new Drug("Fervex", 8, 6, {
        benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
        expirable: true
      })
    );
    expect(fervexExpireLessThan5days).toEqual(
      new Drug("Fervex", 3, 7, {
        benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
        expirable: true
      })
    );
    expect(fervexExpired).toEqual(
      new Drug("Fervex", -1, 0, {
        benefit: { 10: "+2", 5: "+3", 0: "*0", default: "+1" },
        expirable: true
      })
    );
  });
});

describe("Dafalgan", () => {
  it("should decrease the benefit twice as fast as normal drugs", () => {
    const dafalganNotExpired = new Drug("Dafalgan", 2, 3, {
      benefit: { default: "-2", 0: "-4" },
      expirable: true
    });
    const dafalganExpired = new Drug("Dafalgan", 0, 3, {
      benefit: { default: "-2", 0: "-4" },
      expirable: true
    });
    dafalganNotExpired.update();
    dafalganExpired.update();

    expect(dafalganNotExpired).toEqual(
      new Drug("Dafalgan", 1, 1, {
        benefit: { default: "-2", 0: "-4" },
        expirable: true
      })
    );
    expect(dafalganExpired).toEqual(
      new Drug("Dafalgan", -1, 0, {
        benefit: { default: "-2", 0: "-4" },
        expirable: true
      })
    );
  });
});

describe("Magic Pill", () => {
  it("should decrease the benefit twice as fast as normal drugs", () => {
    const magicPill = new Drug("Magic Pill", 15, 40, {
      benefit: { default: "+0" },
      expirable: false
    });
    magicPill.update();
    expect(magicPill).toEqual(
      new Drug("Magic Pill", 15, 40, {
        benefit: { default: "+0" },
        expirable: false
      })
    );
  });
});
