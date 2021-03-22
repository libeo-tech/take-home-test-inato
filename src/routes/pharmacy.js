import {PharmacyController} from '../controllers/pharmacy';
import {Pharmacy} from '../entities/pharmacy';
import {Drug} from '../entities/drug';

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
  new Drug("Dafalgan", 28, 35)
];

const pharmacy = new Pharmacy(drugs);

export const pharmacyRouter = {
  update: () => new PharmacyController().updateDrugs(pharmacy)
}
