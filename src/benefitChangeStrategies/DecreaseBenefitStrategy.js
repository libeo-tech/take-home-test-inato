export class DecreaseBenefitStrategy {
  getChange(state) {
    return state.getExpiresIn() > 0 ? -1 : -2;
  }
}
