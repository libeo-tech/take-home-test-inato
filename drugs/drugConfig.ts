import type { ConstructorThirdArgument, Newable } from "../types";
import type { DrugBehavior } from "./drugBehavior";
import {
  ThresholdDrugBehavior,
  FixedDrugBehavior,
  MultiThresholdDrugBehavior,
} from "./drugBehavior";

/**
 * A drug config contains all the fixed numbers needed to configure a
 * drug behavior.
 *
 * Everytime a drug is added to the system, it should be added at least
 * here as a DrugConfig object, and pushed to the specificDrugConfig
 * array below.
 */

type DrugConfig<BehaviorClass extends Newable> = {
  name: string;
  behavior: BehaviorClass extends Newable<DrugBehavior> ? BehaviorClass : never;
  options: ConstructorThirdArgument<BehaviorClass>;
};

const genericDrugConfig: DrugConfig<typeof ThresholdDrugBehavior> = {
  name: "Generic drug",
  behavior: ThresholdDrugBehavior,
  options: {
    expirationDateIncrement: -1,
    benefitIncrement: -1,
    benefitAfterThreshold: -2,
  },
} as const;

const herbalTeaConfig: DrugConfig<typeof ThresholdDrugBehavior> = {
  name: "Herbal Tea",
  behavior: ThresholdDrugBehavior,
  options: {
    expirationDateIncrement: -1,
    benefitIncrement: 1,
    benefitAfterThreshold: 2,
  },
} as const;

const magicPill: DrugConfig<typeof FixedDrugBehavior> = {
  name: "Magic Pill",
  behavior: FixedDrugBehavior,
  options: null,
} as const;

const fervex: DrugConfig<typeof MultiThresholdDrugBehavior> = {
  name: "Fervex",
  behavior: MultiThresholdDrugBehavior,
  options: {
    expirationDateIncrement: -1,
    benefitIncrement: 1,
    thresholdBenefitIncrements: [
      {
        benefitAfterThreshold: 2,
        threshold: 10,
      },
      {
        benefitAfterThreshold: 3,
        threshold: 5,
      },
    ],
    thresholdBenefitValues: [
      {
        benefitAfterThreshold: 0,
        threshold: 0,
      },
    ],
  },
} as const;

const dafalgan: DrugConfig<typeof ThresholdDrugBehavior> = {
  name: "Dafalgan",
  behavior: ThresholdDrugBehavior,
  options: {
    expirationDateIncrement: -1,
    benefitIncrement: -2,
    benefitAfterThreshold: -4,
  },
} as const;

const specificDrugConfig = [
  herbalTeaConfig,
  magicPill,
  fervex,
  dafalgan,
] as const;

/**
 * Gets the drug config infos from the drug name.
 * If the name is unknown, returns the generic config.
 *
 * @param name the name of the drug we are looking for.
 * @returns the drug config.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDrugConfig(name: string): DrugConfig<Newable<DrugBehavior>> {
  for (const config of specificDrugConfig) {
    if (config.name === name) {
      return config;
    }
  }
  return genericDrugConfig;
}

export { getDrugConfig };
