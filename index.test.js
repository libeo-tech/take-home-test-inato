import { Pharmacy } from "./pharmacy";
import { Drug } from "./drug"


it('should not change the output file while refactoring', () => {
    const drugs = [
        new Drug("Doliprane", 20, 30),
        new Drug("Herbal Tea", 10, 5),
        new Drug("Fervex", 5, 40),
        new Drug("Magic Pill", 15, 40)
    ];
    const trial = new Pharmacy(drugs);

    const log = [];

    for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
        log.push(JSON.stringify(trial.updateBenefitValue()));
    }

    expect(JSON.stringify(log)).toMatchSnapshot()
})
