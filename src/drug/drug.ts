import { DefaultDrugProperties } from "./defaultDrugsProperties";
import { SpecialDrugs } from "./specialDrugsList";

export class Drug {
    name: string;
    expiresIn: number;
    benefit: number;
    #properties: DefaultDrugProperties;
    constructor(name: string, expiresIn: number, benefit: number) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
        this.#properties = SpecialDrugs[this.name]
            ? new SpecialDrugs[this.name]()
            : new DefaultDrugProperties();
    }

    update(): void {
        this.expiresIn = this.#properties.updateExpiration(this.expiresIn);
        this.benefit = this.#properties.updateBenefit(this.benefit, this.expiresIn);
        this.benefit = this.#properties.sanitizeBenefit(this.benefit);
    }
}
