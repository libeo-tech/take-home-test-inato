export default class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * In this function, will update the expiresIn and benefit values
   * based on different kinds of drugs
   */
  updateDrugValues() {
    //In this switch method, will just update benefit value for different kinds of drugs
    switch (this.name.toLowerCase()) {
      case "herbal tea":
        {
          if (this.expiresIn > 0) {
            this.benefit++;
          } else {
            this.benefit += 2;
          }
        }
        break;

      case "fervex": {
        if (this.expiresIn > 0) {
          this.benefit++;
        }

        if (this.expiresIn <= 10) {
          this.benefit++;
        }

        if (this.expiresIn <= 5) {
          this.benefit++;
        }

        if (this.expiresIn < 0) {
          this.benefit = 0;
        }
      }

      case "magic pill":
        break;

      case "dafalgan": {
        this.benefit -= 2;
        break;
      }

      default:
        {
          if (this.expiresIn <= 0) {
            this.benefit -= 2;
          } else {
            this.benefit--;
          }
        }
        break;
    }

    // Once benefit value is updated, let's verify benefit values for its bounds

    if (this.benefit < 0) {
      this.benefit = 0;
    }

    if (this.benefit > 50) {
      this.benefit = 50;
    }

    // Once we have benefit values, lets update expiresIn

    if(this.name.toLowerCase() !== "magic pill"){
        this.expiresIn--
    }

    return {
      name: this.name,
      expiresIn: this.expiresIn,
      benefit: this.benefit
    };
  }
}
