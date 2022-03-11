export const DRUG_UPDATE_CONFIG = [
    {
        drugNamePattern: "herbal tea",
        updateBenefit: drug => drug.expiresIn > 0 ? drug.benefit + 1 : drug.benefit + 2
    },
    {
        drugNamePattern: "magic pill",
        updateBenefit: drug => drug.benefit,
        updateExpireIn: drug => drug.expiresIn
    },
    {
        drugNamePattern: "fervex",
        updateBenefit: drug => {
            const expiresIn = drug.expiresIn;
            const benefit = drug.benefit;
            if (expiresIn <= 0) {
                return 0;
            } else if (expiresIn <= 5) {
                return benefit + 3;
            } else if (expiresIn <= 10) {
                return benefit + 2;
            }
            return benefit + 1;
        }
    },
    {
        drugNamePattern: "dafalgan",
        updateBenefit: drug => drug.expiresIn > 0 ? drug.benefit - 2 : drug.benefit - 4
    },
    {
        drugNamePattern: ".*",
        updateBenefit: drug => drug.expiresIn > 0 ? drug.benefit - 1 : drug.benefit - 2
    }
];
