export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const SET = 'SET';
export const KEEP = 'KEEP';

export class Rule {
    constructor(daysToExpire, rule, amount) {
        this.daysToExpire = daysToExpire;
        this.rule = rule;
        this.amount = amount;
    }
}

export const RULES = {
    DEFAULT: {
        name: 'DEFAULT',
        rules: [new Rule(Infinity, DECREASE, 1), new Rule(0, DECREASE, 2)]
    },
    DAGAFLAN: {
        name: 'DAGAFLAN',
        rules: [new Rule(Infinity, DECREASE, 2), new Rule(0, DECREASE, 4)]
    },
    TEA: {
        name: 'TEA',
        rules: [new Rule(Infinity, INCREASE, 1), new Rule(0, INCREASE, 2)]
    },
    FERVEX: {
        name: 'FERVEX',
        rules: [new Rule(Infinity, INCREASE, 1), new Rule(10, INCREASE, 2), new Rule(5, INCREASE, 3), new Rule(0, SET, 0)]
    },
    INFINITE: {
        name: 'INFINITE',
        rules: [new Rule(Infinity, KEEP)]
    }
};

export const DRUGS_MAPPING = [
    {
        drug: 'Herbal Tea',
        category: RULES.TEA.name
    },
    {
        drug: 'Magic Pill',
        category: RULES.INFINITE.name
    },
    {
        drug: 'Fervex',
        category: RULES.FERVEX.name
    },
    {
        drug: 'Dafalgan',
        category: RULES.DAGAFLAN.name
    }
];
