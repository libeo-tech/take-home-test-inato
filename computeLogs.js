const DEFAULT_NUMBER_OF_DAYS_TO_ELAPSE = 30;

export function computeLogs(
  trial,
  numberOfDaysToElapse = DEFAULT_NUMBER_OF_DAYS_TO_ELAPSE
) {
  const log = [];

  for (let elapsedDays = 0; elapsedDays < numberOfDaysToElapse; elapsedDays++) {
    log.push(JSON.stringify(trial.updateBenefitValue()));
  }

  return log;
}
