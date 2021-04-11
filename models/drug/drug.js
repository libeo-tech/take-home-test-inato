import { FervexBenefit, FERVEX_DRUG_NAME } from "./fervexBenefit";
import { HerbalTeaBenefit, HERBAL_TEA_DRUG_NAME } from "./herbalTeaBenefit";
import { MagicPillBenefit, MAGIC_PILL_DRUG_NAME } from "./magicPillBenefit";
import { DefaultDrugBenefit, } from "./defaultDrugBenefit"

export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
        switch (this.name) {
            case HERBAL_TEA_DRUG_NAME:
                this.benefitStrategy = new HerbalTeaBenefit(this)
                break
            case FERVEX_DRUG_NAME:
                this.benefitStrategy = new FervexBenefit(this)
                break
            case MAGIC_PILL_DRUG_NAME:
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