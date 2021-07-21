import { DRUG_NAME } from '../../config/drug';
import { MagicPill } from '../../models/MagicPill';
import { Fervex } from '../../models/Fervex';
import { Dafalgan } from '../../models/Dafalgan';
import { HerbalTea } from '../../models/HerbalTea';
import { Drug } from '../../models/Drug';

export class DrugFactory {
  public static createDrug(name: string, expiresIn: number, benefit: number) {

    if (name === DRUG_NAME.MAGIC_PILL) {
      return new MagicPill(name, expiresIn, benefit);
    }

    if (name === DRUG_NAME.HERBAL_TEA) {
      return new HerbalTea(name, expiresIn, benefit);
    }

    if (name === DRUG_NAME.DAFALGAN) {
      return new Dafalgan(name, expiresIn, benefit);
    }

    if (name === DRUG_NAME.FERVEX) {
      return new Fervex(name, expiresIn, benefit);
    }

    return new Drug(name, expiresIn, benefit);
  }
}
