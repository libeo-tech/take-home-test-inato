export class DefaultDrugProperties {
  updateBenefit(benefit: number, expiration: number): number {
    if (expiration >= 0) return benefit - 1;
    return benefit - 2;
  }

  sanitizeBenefit(benefit: number): number {
    let sanitizedBenefit = benefit;
    sanitizedBenefit = Math.max(sanitizedBenefit, 0);
    sanitizedBenefit = Math.min(sanitizedBenefit, 50);
    return sanitizedBenefit;
  }

  updateExpiration(expiration: number): number {
    return expiration - 1;
  }
}
