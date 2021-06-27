const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

const updateBenefitMapping = {
  "Magic Pill": updateMagicPillBenefitValue,
  "Herbal Tea": updateHerbalTeaBenefitValue,
  Fervex: updateFervexBenefitValue
};

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  updateBenefitValue() {
    const updateBenefitFunction =
      updateBenefitMapping[this.name] || updateNormalBenefitValue;

    const { expiresIn, benefit } = updateBenefitFunction(
      this.expiresIn,
      this.benefit
    );

    this.expiresIn = expiresIn;
    this.benefit = benefit;

    return this;
  }
}

function updateNormalBenefitValue(expiresIn, benefit) {
  const newExpiresIn = expiresIn - 1;
  let newBenefit = benefit;

  if (hasBenefit(newBenefit)) {
    newBenefit -= 1;
  }

  if (isExpired(newExpiresIn) && hasBenefit(newBenefit)) {
    newBenefit -= 1;
  }

  return { expiresIn: newExpiresIn, benefit: newBenefit };
}

function updateMagicPillBenefitValue(expiresIn, benefit) {
  return { expiresIn, benefit };
}

function updateHerbalTeaBenefitValue(expiresIn, benefit) {
  const newExpiresIn = expiresIn - 1;
  let newBenefit = benefit;

  if (isInferiorToMaxBenefit(newBenefit)) {
    newBenefit += 1;
  }

  if (isExpired(newExpiresIn) && isInferiorToMaxBenefit(newBenefit)) {
    newBenefit += 1;
  }

  return { expiresIn: newExpiresIn, benefit: newBenefit };
}

function updateFervexBenefitValue(expiresIn, benefit) {
  const newExpiresIn = expiresIn - 1;
  let newBenefit = benefit;

  if (isInferiorToMaxBenefit(newBenefit)) {
    newBenefit += 1;
    if (newExpiresIn < 11 && isInferiorToMaxBenefit(newBenefit)) {
      newBenefit += 1;
    }
    if (newExpiresIn < 6 && isInferiorToMaxBenefit(newBenefit)) {
      newBenefit += 1;
    }
  }

  if (isExpired(newExpiresIn)) {
    newBenefit -= newBenefit;
  }

  return { expiresIn: newExpiresIn, benefit: newBenefit };
}

function isExpired(expiresIn) {
  return expiresIn < 0;
}

function hasBenefit(benefit) {
  return benefit > MIN_BENEFIT;
}

function isInferiorToMaxBenefit(benefit) {
  return benefit < MAX_BENEFIT;
}
