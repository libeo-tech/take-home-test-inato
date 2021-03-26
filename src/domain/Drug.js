export class Drug {
  constructor(name, state, benefitStrategy) {
    this.name = name;
    this.state = state;
    this.benefitStrategy = benefitStrategy;
  }

  getState() {
    return this.state;
  }

  updateDayState() {
    this.state.applyDayBenefitChange(
      this.benefitStrategy.getChange(this.state)
    );
  }
}
