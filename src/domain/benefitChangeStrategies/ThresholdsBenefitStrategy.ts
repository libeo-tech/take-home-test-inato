import { DrugState } from "../DrugState";
import { BenefitChangeStrategy } from "../BenefitChangeStrategy";

interface ThresholdDefinition {
  threshold: number;
  change: number;
}
interface Changes {
  [k: number]: number;
}

type Threshold = number;

export class ThresholdsBenefitStrategy implements BenefitChangeStrategy {
  private readonly thresholds: Threshold[];
  private readonly changes: Changes;

  constructor(definition: ThresholdDefinition[]) {
    this.thresholds = ThresholdsBenefitStrategy.extractThresholdsFromDefintion(
      definition
    );
    this.changes = ThresholdsBenefitStrategy.extractChangesFromDefintion(
      definition
    );
  }

  public getChange(state: DrugState): number {
    const currentExpiresIn = state.getExpiresIn();

    for (const threshold of this.thresholds) {
      if (currentExpiresIn > threshold) {
        return this.changes[threshold];
      }
    }

    return -1 * state.getBenefit();
  }

  private static extractThresholdsFromDefintion(
    definitions: ThresholdDefinition[]
  ): Threshold[] {
    return definitions.map((definition) => definition.threshold).sort();
  }

  private static extractChangesFromDefintion(
    definitions: ThresholdDefinition[]
  ): Changes {
    const changes: Record<number, number> = {};

    for (const definition of definitions) {
      changes[definition.threshold] = definition.change;
    }

    return changes;
  }
}
