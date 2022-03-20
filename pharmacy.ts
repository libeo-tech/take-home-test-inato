import Drug from "./drug";

export default class Pharmacy {
    constructor(public drugs: Array<Drug> = []) {
        this.drugs = drugs;
    }

    updateBenefitValue() {
        for (const drug of this.drugs) {
            drug.updateBenefitValue();
        }

        return this.drugs;
    }
}
