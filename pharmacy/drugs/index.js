import { updateHerbalTea } from "./herbalTea";
import { updateFervex } from "./fervex";
import { updateDafalgan } from "./dafalgan";
import { decreaseExpiresIn, limitBenefitToMin } from "../lib";

const updateDefaultDrug = drug => {
  const benefitDecreased = {
    benefit: drug.expiresIn <= 0 ? drug.benefit - 2 : drug.benefit - 1
  };
  const expiresDecreased = decreaseExpiresIn(drug);
  const benefitSanitized = limitBenefitToMin(benefitDecreased);
  return { ...drug, ...expiresDecreased, ...benefitSanitized };
};

export { updateHerbalTea, updateFervex, updateDefaultDrug, updateDafalgan };
