import { Pharmacy } from '../pharmacy/Pharmacy';

// Each day (deadline), update Pharmacy's items benefitValues.

const getNewInventory = (pharmacy: Pharmacy, deadline: number) => {
  const log = [];

  for (let elapsedDays = 0; elapsedDays < deadline; elapsedDays += 1) {
    log.push(JSON.stringify(pharmacy.updateBenefitValue()));
  }

  return log.toString();
};

export { getNewInventory };
