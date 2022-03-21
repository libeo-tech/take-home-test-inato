  function updateBenefit(drug) {
      if (drug.name === "Herbal Tea") {
          drug.benefit += drug.expiresIn < 0 ? 2 : 1;
      } else if (drug.name === "Fervex") {
          switch (true) {
              case drug.expiresIn <= 10 && drug.expiresIn > 5:
                  drug.benefit += 2;
                  break;
              case drug.expiresIn <= 5 && drug.expiresIn > 0:
                  drug.benefit += 3;
                  break;
              case drug.expiresIn <= 0:
                  drug.benefit = 0;
                  break;
              default:
                  drug.benefit += 1;
                  break;
          }
      } else if (drug.name === "Dafalgan") {
          drug.benefit -= drug.expiresIn < 0 ? 4 : 2;
      } else {
          drug.benefit -= drug.expiresIn < 0 ? 2 : 1;
      }
      return drug;
  }

  module.exports = {
      updateBenefit
  };