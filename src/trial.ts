import { addDays } from 'date-fns';
import { writeFile } from 'fs/promises';
import {
  Drug,
} from './domain/models/Drug';
import { Fervex } from './domain/models/Fervex';
import { Pharmacy } from './domain/models/Pharmacy';

const now = new Date('2022-03-12T10:00:00+01:00');

(async () => {
  try {
    const drugs = [
      new Drug({
        createdAt: now,
        name: 'Doliprane',
        originalExpiresIn: 20,
        originalBenefit: 30,
      }),
      new Drug({
        createdAt: now,
        name: 'Herbal Tea',
        originalExpiresIn: 10,
        originalBenefit: 5,
      }, { timeBenefitFactor: 1, timeBenefitFactorAfterExpiration: 2 }),
      new Fervex({
        createdAt: now,
        originalExpiresIn: 5,
        originalBenefit: 40,
      }),
      new Drug({
        createdAt: now,
        name: 'Magic Pill',
        // as it never expires, it is weird to set an expiration date.
        // however, we assume regulation rules enforce its definition.
        // we set it, but factors are set to 0 to ensure its properties are constant.
        originalExpiresIn: 15,
        originalBenefit: 40,
      }, { timeBenefitFactor: 0, timeBenefitFactorAfterExpiration: 0 }),
      new Drug({
        createdAt: now,
        name: 'Dafalgan',
        // unknown initial values for originalExpiresIn & originalBenefit
        originalExpiresIn: 20,
        originalBenefit: 30,
      }, { timeBenefitFactor: -2, timeBenefitFactorAfterExpiration: -4 }),
    ];

    const pharmacy = new Pharmacy({ drugs });

    const logs = [];
    // note that I updated starting point of elapsed day as it wasn't very clear for me if
    // I had to take in account full days or some arbitrary set hour in a day.
    for (let elapsedDays = 1; elapsedDays < 31; elapsedDays++) {
      const targetDate = addDays(now, elapsedDays);

      logs.push(JSON.stringify(pharmacy.updatePharmacyStocksInfo(targetDate)));
    }

    await writeFile('output.txt', logs.toString());

    // eslint-disable-line no-console
    console.log('Successfully written output.txt file with stock info logs.');

    process.exit(0);
  } catch (e) {
    // eslint-disable-line no-console
    console.error('Could not update stock infos');
    process.exit(1);
  }
})();
