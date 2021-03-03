import { DrugDefinition } from "../drugs";

export const MagicPillDefinition: DrugDefinition = (drug) => ({
    updateBenefitValue: (currentState) => {
        drug.expiresIn = currentState.expiresIn;
        drug.benefit = currentState.benefit;
    }
});
