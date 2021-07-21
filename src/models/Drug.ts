export class Drug {

    name: string;
    expiresIn: number;
    benefit: number;

    constructor(name: string, expiresIn: number, benefit: number) {

        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    updateBenefit(): void {
        this.benefit = this.decrementBenefit(this.expiresIn < 0 ? 2 : 1);
    }

    updateExpireIn(): void {
        this.expiresIn = this.expiresIn - 1;
    }

    incrementBenefit(amount: number) {
        return this.benefit + amount < 50 ? this.benefit + amount : 50;
    }

    decrementBenefit(amount: number) {
        return this.benefit - amount > 0 ? this.benefit - amount : 0;
    }
}