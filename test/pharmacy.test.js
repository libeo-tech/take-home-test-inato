import { PharmacyController } from '../src/controllers/pharmacy';
import { Pharmacy } from '../src/entities/pharmacy';
import { Drug } from '../src/entities/drug';

describe('Pharmacy', () => {

  const ctrl = new PharmacyController();

  it('Should decrease the benefit and expiresIn', () => {
    const values = ctrl.updateBenefitValue(new Pharmacy([new Drug('test', 2, 3)]).getDrugs());
    expect(values).toEqual([new Drug('test', 1, 2)]);
  });

  it('Fervex should increases in benefit by 3 and decrease expiresIn', () => {
    const fervex = new Pharmacy([new Drug('Fervex', 2, 3)]).getDrugs();
    const values = ctrl.updateBenefitValue(fervex);
    /*
     * Fervex increases in benefit when its expiration date it less than 5 days
     * So here in the instance above, the fervex expires in 2 days and has 3 as benefit point
     * In this example test, the fervex drug are decreasing for just 1 days.
     *
     * What's going to happen here is:
     *
     * expiresIn = 2 will decrease for 1days and will be equal to 1
     * benefit = 2 will be increased by 3 (because its lower than 5)
     * and will be equal to 6 (2*3) after the result process
     * Then correct result we should have in the expect below is [ Drug { name: 'Fervex', expiresIn: 1, benefit: 6 } ]
     */
    expect(values).toEqual([new Drug('Fervex', 1, 6)]);
  });

  it('Magic Pill not decreases in benefit nor decrease in expiresIn', () => {
    const magicPill = new Pharmacy([new Drug('Magic Pill', 2, 3)]).getDrugs();
    const values = ctrl.updateBenefitValue(magicPill);
    /*
     * "Magic Pill" never expires nor decreases in Benefit. So we should have
     * the same values from input to output
     */
    expect(values).toEqual([new Drug('Magic Pill', 2, 3)]);
  });

  it('Dafalgan degrades in Benefit twice as fast as normal drugs', () => {
    const dafalgan = new Pharmacy([new Drug('Dafalgan', 2, 3)]).getDrugs();
    const values = ctrl.updateBenefitValue(dafalgan);
    /*
     * "Dafalgan" degrades in Benefit twice as fast as normal drugs
     * So here we should have as result:
     * expiresIn = 2 - 1 = 1
     * benefit = 3 - 2 = 1
     */
    expect(values).toEqual([new Drug('Dafalgan', 1, 1)]);
  });

  it('Herbal Tea increases in Benefit the older it gets', () => {
    const herbalTea = new Pharmacy([new Drug('Herbal Tea', 2, 3)]).getDrugs();
    const values = ctrl.updateBenefitValue(herbalTea);
    /*
     * "Herbal Tea" increases in Benefit the older it gets
     * So here we should have as result:
     * expiresIn = 2 - 1 = 1
     * benefit = 3 + 1 = 4
     */
    expect(values).toEqual([new Drug('Herbal Tea', 1, 4)]);
  });

  it('Normal drugs degrades in benefit and decreases in expiresIn', () => {
    const doliprane = new Pharmacy([new Drug('Doliprane', 2, 3)]).getDrugs();
    const values = ctrl.updateBenefitValue(doliprane);
    /*
     * "Doliprane" degrades in benefit and decreases in expiresIn once time
     * So here we should have as result:
     * expiresIn = 2 - 1 = 1
     * benefit = 3 - 1 = 2
     */
    expect(values).toEqual([new Drug('Doliprane', 1, 2)]);
  });

});
