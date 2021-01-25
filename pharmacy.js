export class Drug {
    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
    increaseBenefit(value) {
        this.benefit += value;
        if (this.benefit > 50) {
            this.benefit = 50;
        }
    }
    decreaseBenefit(value) {
        this.benefit -= value;
        if (this.benefit < 0) {
            this.benefit = 0;
        }
    }
}

export class Pharmacy {
    constructor(drugs = []) {
        this.drugs = drugs;
    }
    updateBenefitValue() {
        for (var i = 0; i < this.drugs.length; i++) {

            // Drugs different from Magic  Pill expire
            if (this.drugs[i].name != "Magic Pill") {
                this.drugs[i].expiresIn -= 1;
            }

            // Herbal Tea
            if (this.drugs[i].name == "Herbal Tea") {
                if (this.drugs[i].expiresIn < 0) {
                    this.drugs[i].increaseBenefit(2);
                } else {
                    this.drugs[i].increaseBenefit(1);
                }
            }
            //Fervex
            else if (this.drugs[i].name == "Fervex") {
                if (this.drugs[i].expiresIn < 0) {
                    this.drugs[i].benefit = 0;
                } else if (this.drugs[i].expiresIn <= 5) {
                    this.drugs[i].increaseBenefit(3);
                } else if (this.drugs[i].expiresIn <= 10) {
                    this.drugs[i].increaseBenefit(2);
                } else {
                    this.drugs[i].increaseBenefit(1);
                }
            }

            // Other drugs and different from Magic Pill
            else if (this.drugs[i].name != "Magic Pill") {
                if (this.drugs[i].expiresIn < 0) {
                    this.drugs[i].decreaseBenefit(2);
                } else {
                    this.drugs[i].decreaseBenefit(1);
                }

            }
        }

        return this.drugs;
    }
}