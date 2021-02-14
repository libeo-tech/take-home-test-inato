export interface Drug {
  name: string
  expiresIn: number
  benefit: number
}

export namespace Drug {
  const MAX_BENEFIT = 50
  const MIN_BENEFIT = 0

  function capBenefit(benefit: number): number {
    return Math.min(Math.max(benefit, MIN_BENEFIT), MAX_BENEFIT)
  }

  function updateExpiration({ name, expiresIn }: Drug): number {
    switch (name) {
      case 'Magic Pill':
        return expiresIn
      default:
        return expiresIn - 1
    }
  }

  function updateBenefit({ name, expiresIn, benefit }: Drug): number {
    switch (name) {
      case 'Magic Pill':
        return benefit
      case 'Herbal Tea':
        return expiresIn > 0
          ? benefit + 1
          : benefit + 2
      case 'Fervex':
        if (expiresIn <= 0)
          return 0
        else if (expiresIn <= 5)
          return benefit + 3
        else if (expiresIn <= 10)
          return benefit + 2
        else
          return benefit + 1
      default:
        return expiresIn > 0
          ? benefit - 1
          : benefit - 2
    }
  }

  export function Update(drug: Drug): Drug {
    const benefit = capBenefit(updateBenefit(drug))
    const expiresIn = updateExpiration(drug)

    return {
      ...drug,
      benefit,
      expiresIn
    }
  }
}
