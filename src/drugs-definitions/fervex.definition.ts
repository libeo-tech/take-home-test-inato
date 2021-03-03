import { DrugDefinition } from "../drugs";

export const FervexDefinition: DrugDefinition = (drug) => ({
    updateBenefitValue: (currentState) => {
        if (drug.expiresIn < 0) {
            drug.benefit = 0;
        } else if (drug.expiresIn <= 5) {
            drug.benefit = currentState.benefit + 3;
        } else if (drug.expiresIn <= 10) {
            drug.benefit = currentState.benefit + 2;
        } else {
            drug.benefit = currentState.benefit + 1;
        }
    }
});
