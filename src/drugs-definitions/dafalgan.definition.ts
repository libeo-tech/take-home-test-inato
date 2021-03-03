import { DrugDefinition } from "../drugs";

export const DafalganDefinition: DrugDefinition = (drug) => ({
    updateBenefitValue: (currentState) => {
        drug.benefit = currentState.benefit - 2;
    }
});
