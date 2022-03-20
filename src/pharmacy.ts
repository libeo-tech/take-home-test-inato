import Drug from "./drug";

export default class Pharmacy {
    constructor(public drugs: Array<Drug> = []) {
        this.drugs = drugs;
    }

    processEndOfDay() {
        for (const drug of this.drugs) {
            drug.updateExpiration()
                .updateBenefitValue();
        }

        return this.drugs;
    }
}
