export default class Benefit {
  constructor(value) {
    this.value = value;
  }

  add(toAdd) {
    const newValue = this.value + toAdd;
    if (newValue > 50) {
      return 50;
    }
    if (newValue < 0) {
      return 0;
    }
    return newValue;
  }
}
