import { Pharmacy } from './pharmacy';
import { Drug } from '../drugs/Drug';
import {Doliprane} from "../drugs/Doliprane/Doliprane";
import {HerbalTea} from "../drugs/HerbalTea/HerbalTea";
import {Fervex} from "../drugs/Fervex/Fervex";
import {MagicPill} from "../drugs/MagicPill/MagicPill";

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug('test', 1, 2)]);
  });
  it('match snapshot', () => {
    const drugs = [
      new Doliprane(),
      new HerbalTea(),
      new Fervex(),
      new MagicPill(),
    ];

    const pharmacy = new Pharmacy(drugs);
    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
      pharmacy.updateBenefitValue();
    }
    expect(pharmacy).toMatchSnapshot();
  });
});
