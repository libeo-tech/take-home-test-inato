import { DrugState } from "./DrugState";
import { BenefitChangeStrategy } from "./BenefitChangeStrategy";

export class Drug {
  constructor(
    public readonly name: string,
    public readonly state: DrugState,
    public readonly benefitStrategy: BenefitChangeStrategy
  ) {}

  public getState(): DrugState {
    return this.state;
  }

  public updateDayState(): void {
    this.state.applyDayBenefitChange(
      this.benefitStrategy.getChange(this.state)
    );
  }
}
