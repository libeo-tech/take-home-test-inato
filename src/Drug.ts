import {MIN_BENEFIT, MAX_BENEFIT, DRUGS_NAME} from './Constant'

export default class Drug {
    private _name: string;
    private _expireIn: number;
    private _benefit: number;


    constructor(name: string, expireIn: number, benefit: number) {
        this._name = name;
        this._expireIn = expireIn;
        this._benefit = benefit;
    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }

    get expireIn(): number {
        return this._expireIn;
    }

    set expireIn(expireIn: number) {
        this._expireIn = expireIn;
    }

    get benefit(): number {
        return this._benefit;
    }

    set benefit(benefit: number) {
        this._benefit = benefit;
    }


    updateBenefit(benefit: number) {
        if (benefit > MAX_BENEFIT) {
            // The Benefit of an item is never more than 50
            this.benefit = MAX_BENEFIT;
        } else if (benefit < MIN_BENEFIT) {
            // The Benefit of an item is never negative
            this.benefit = MIN_BENEFIT;
        } else {
            if (benefit > 0) {
                this.benefit += benefit;
            } else {
                this.benefit -= benefit;
            }
        }
    }

    isMagicPills() {
        return this.name === DRUGS_NAME.MAGIG_PILL
    }


    processBenefit() {
        switch (this.name) {
            case DRUGS_NAME.MAGIG_PILL:
                return this.benefit // "Magic Pill" never expires nor decreases in Benefit
            case DRUGS_NAME.FERVEX:
                if (this.expireIn <= 0)
                    return 0
                else if (this.expireIn <= 5)
                    return this.updateBenefit(3);
                else if (this.expireIn <= 10)
                    return this.updateBenefit(2);
                else
                    return this.updateBenefit(1);
            case DRUGS_NAME.HERBAL_TEA:
                return this.expireIn > 0
                    ? this.updateBenefit(1)
                    : this.updateBenefit(2);
            case DRUGS_NAME.DAFALGAN:
                // "Dafalgan" degrades in Benefit twice as fast as normal drugs
                return this.expireIn > 0
                    ? this.updateBenefit(-2)
                    : this.updateBenefit(-4)
            default:
                // Once the expiration date has passed, Benefit degrades twice as fast.
                return this.expireIn > 0
                    ? this.updateBenefit(-1)
                    : this.updateBenefit(-2);
        }
    }
}
