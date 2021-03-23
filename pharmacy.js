import { Drug } from "./drug";
const herbalTea = "Herbal Tea";
const fervex = "Fervex";
const magicPills = "Magic Pill";
const dafalgan = 'Dalagan';

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    const drugs = []
    for (var i = 0; i < this.drugs.length; i++) {
      let drug = new Drug(this.drugs[i].name, this.drugs[i].expiresIn, this.drugs[i].benefit);
      switch (drug.name) {
        case magicPills:
          break;
        case fervex:
          if (drug.expiresIn <= 0) {
            drug.benefit = 0;
          }
          else if (drug.expiresIn < 5) {
            drug.benefit += 3;
          }
          else if (drug.expiresIn < 10) {
            drug.benefit += 2;
          }
          else {
            drug.benefit += 1;
          }
          drug.expiresIn -= 1;
          break;
        case herbalTea:
          if (drug.expiresIn <= 0) {
            drug.benefit += 2;
          }
          else {
            drug.benefit += 1;
          }
          drug.expiresIn -= 1;
          break;
        case dafalgan:
          drug.expiresIn -= 1;
          drug.benefit -= 2;
          break;
        default:
          drug.expiresIn -= 1;
          drug.benefit -= 1;

      }

      if (drug.benefit < 0) {
        drug.benefit = 0;
      }
      if (drug.benefit > 50) {
        drug.benefit = 50;
      }

      drugs.push(drug)
    }
    return drugs;
  }
}
