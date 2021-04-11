import { FervexBenefit } from "./fervexBenefit";
import { HerbalTeaBenefit } from "./herbalTeaBenefit";
import { MagicPillBenefit } from "./magicPillBenefit";
import { DefaultDrugBenefit } from "./defaultDrugBenefit"

export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;

        switch (this.name) {
            case "Herbal Tea":
                this.benefitStrategy = new HerbalTeaBenefit(this)
                break
            case "Fervex":
                this.benefitStrategy = new FervexBenefit(this)
                break
            case "Magic Pill":
                this.benefitStrategy = new MagicPillBenefit(this)
                break
            default:
                this.benefitStrategy = new DefaultDrugBenefit(this)
        }
    }

    updateBenefitValue() {
        this.benefitStrategy.updateBenefitValue()
    }
}