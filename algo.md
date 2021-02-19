# Pharmacy

## Drugs

Drugs have 3 characteristics : _new Drug (name, expiresIn, benefit)_

**expiresIn** : number of days we have until the item expires

**benefit** : how powerful the drug is

## Algo

### General

- At the end of each day our system lowers both values for every drug
- The Benefit of an item is never more than 50
- The Benefit of an item is never negative
- Once the expiration date has passed, Benefit degrades twice as fast.

### Specifics

- **"Herbal Tea"** actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
- **"Magic Pill"** never expires nor decreases in Benefit
- **"Fervex"**, like Herbal Tea, increases in Benefit as its expiration date approaches
  - Benefit increases by 2 when there are 10 days or less
  - Benefit increasesby 3 when there are 5 days or less but
  - Benefit drops to 0 after the expiration date

### New feature

We have recently signed a supplier of **"Dafalgan"** which degrades in Benefit twice as fast as normal drugs.
