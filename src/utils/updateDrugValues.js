/* eslint-disable prettier/prettier */

const getHerbalTeaUpdatedValues = (drug) => {
  decreaseExpiresInValue(drug);

  const { expiresIn, benefit } = drug;

  if (benefit + 1 > 50)
    return ;

  if (expiresIn < 0 && benefit + 2 > 50)
    drug.benefit = 50;
  else
    drug.benefit = expiresIn < 0 ? drug.benefit + 2 : drug.benefit + 1;
};

const getMagicPillUpdatedValues = () => {};

const getFervexUpdatedValues = (drug) => {
  decreaseExpiresInValue(drug);

  const { expiresIn, benefit } = drug;

  switch (true) {
    case expiresIn < 0:
      drug.benefit = 0;
      break;
    case expiresIn <= 5:
      drug.benefit = benefit + 3 <= 50 ? benefit + 3 : 50;
      break;
    case expiresIn <= 10:
      drug.benefit =  benefit + 2 <= 50 ? benefit + 2 : 50;
      break;
    default:
      decreaseBenefitValues(drug);
  }
};

const getDafalganUpdatedValues = (drug) => {
  decreaseExpiresInValue(drug);

  const { benefit, expiresIn } = drug;

  if (benefit - 2 >= 0 && expiresIn >= 0)
    drug.benefit = benefit - 2;
  else if (benefit - 4 >= 0 && expiresIn < 0)
    drug.benefit = benefit - 4;
};

const decreaseExpiresInValue = (drug) => {
  const { expiresIn } = drug;

  drug.expiresIn = expiresIn - 1;
};

const decreaseBenefitValues = (drug) => {
  const { benefit, expiresIn } = drug;

  if (benefit - 1 >= 0 && expiresIn >= 0)
    drug.benefit = benefit - 1;
  else if (benefit - 2 >= 0 && expiresIn < 0)
    drug.benefit = benefit - 2;
};

export const updatedDrugValues = (drug) => {
  const { name } = drug;

  const specificsCases = {
    "Herbal Tea": getHerbalTeaUpdatedValues,
    "Magic Pill": getMagicPillUpdatedValues,
    Fervex: getFervexUpdatedValues,
    Dafalgan: getDafalganUpdatedValues
  };

  if (specificsCases[name])
    specificsCases[name](drug);
  else {
    decreaseExpiresInValue(drug);
    decreaseBenefitValues(drug);
  }
};
