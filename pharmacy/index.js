import {
  updateHerbalTea,
  updateFervex,
  updateDefaultDrug,
  updateDafalgan
} from "./drugs";

const updateDrugs = drugs => {
  const drugsUpdated = drugs.map(drug => {
    let drugUpdated;
    switch (drug.name) {
      case "Herbal Tea":
        drugUpdated = updateHerbalTea(drug);
        break;
      case "Fervex":
        drugUpdated = updateFervex(drug);
        break;
      case "Magic Pill":
        drugUpdated = { ...drug };
        break;
      case "Dafalgan":
        drugUpdated = updateDafalgan(drug);
        break;
      case "Doliprane":
      default:
        drugUpdated = updateDefaultDrug(drug);
        break;
    }
    return drugUpdated;
  });
  return drugsUpdated;
};

export const createPharmacy = (drugs = []) => {
  const update = () => {
    drugs = updateDrugs(drugs);
    return drugs;
  };

  return {
    drugs,
    update
  };
};
