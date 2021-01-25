export class Drug {
    name: string;
    expiresIn: any;
    benefit: any;

    constructor(name, expiresIn, benefit) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
}