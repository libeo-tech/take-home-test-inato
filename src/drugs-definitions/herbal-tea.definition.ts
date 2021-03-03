import { DrugDefinition } from "../drugs";

export const HerbalTeaDefinition: DrugDefinition = (drug) => ({
    updateBenefitValue: (currentState) => {
        if (drug.expiresIn < 0) {
            drug.benefit = currentState.benefit + 2;
        } else {
            drug.benefit = currentState.benefit + 1;
        }
    }
});
