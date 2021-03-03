import { DafalganDefinition } from "./drugs-definitions/dafalgan.definition";
import { FervexDefinition } from "./drugs-definitions/fervex.definition";
import { HerbalTeaDefinition } from "./drugs-definitions/herbal-tea.definition";
import { MagicPillDefinition } from "./drugs-definitions/magic-pill.definition";

export class Drug {
    definition?: ReturnType<DrugDefinition>;

    constructor(public name: RegisteredDrugName | string, public expiresIn: number, public benefit: number) {
        if (DrugsDefinitionsMapping[name]) {
            this.definition = DrugsDefinitionsMapping[name](this);
        }
    }

    public updateBenefitValue(): void {
        /* save current state to allow standard effects to be overriden */
        const currentState = {
            expiresIn: this.expiresIn,
            benefit: this.benefit
        };

        /* standard drug effects */
        if (this.expiresIn <= 0) {
            this.benefit -= 2;
        } else {
            this.benefit--;
        }
        this.expiresIn--;

        /* call specific definition if any */
        if (this.definition) {
            this.definition.updateBenefitValue(currentState);
        }

        /* ensure benefit stays between 0 and 50 */
        if (this.benefit > 50) {
            this.benefit = 50;
        } else if (this.benefit < 0) {
            this.benefit = 0;
        }
    }

    public prettify(): PrettifiedDrug {
        return {
            name: this.name,
            expiresIn: this.expiresIn,
            benefit: this.benefit
        }
    }
}

export type PrettifiedDrug = Pick<Drug, 'name' | 'expiresIn' | 'benefit'>;

export enum RegisteredDrugName {
    HERBAL_TEA = "Herbal Tea",
    FERVEX = "Fervex",
    MAGIC_PILL = "Magic Pill",
    DAFALGAN = "Dafalgan"
}

export type DrugDefinition = (drug: Drug) => ({
    updateBenefitValue: (currentState: { expiresIn: number, benefit: number}) => void
});

export const DrugsDefinitionsMapping: Record<RegisteredDrugName, DrugDefinition> = {
    [RegisteredDrugName.HERBAL_TEA]: HerbalTeaDefinition,
    [RegisteredDrugName.FERVEX]: FervexDefinition,
    [RegisteredDrugName.MAGIC_PILL]: MagicPillDefinition,
    [RegisteredDrugName.DAFALGAN]: DafalganDefinition
}
