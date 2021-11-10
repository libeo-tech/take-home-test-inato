import { Pharmacy } from './pharmacy/pharmacy';

const getLogString = (pharmacy: Pharmacy, duration: number) => {
  const log = [];

  for (let elapsedDays = 0; elapsedDays < duration; elapsedDays += 1) {
    log.push(JSON.stringify(pharmacy.updateBenefitValue()));
  }

  return log.toString();
};

export { getLogString };
