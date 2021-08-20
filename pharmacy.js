import { Drug } from "./drugs/drug";
import DrugDictionary from "./drugs/drugDictionary";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs = this.drugs.map(drug => {
          const classifiedDrug = this.DrugClassifier(drug);
          classifiedDrug.decreaseExpiresIn();
          classifiedDrug.updateBenefit();
          return classifiedDrug;
       });
    return this.drugs;
  }

  DrugClassifier(drug){
    if(Object.keys(DrugDictionary).includes(drug.name)) return new DrugDictionary[drug.name](drug.expiresIn, drug.benefit);
    return new Drug(drug.name, drug.expiresIn, drug.benefit);
  }
}
