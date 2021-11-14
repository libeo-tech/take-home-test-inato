export default function makeLog(trial, elapsedDays) {
  let log = [];
  for (let i = 0; i < elapsedDays; i++) {
    log.push(JSON.stringify(trial.updateBenefitValue()));
  }
  return log.toString();
}
