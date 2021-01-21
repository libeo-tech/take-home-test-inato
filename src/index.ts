import * as fs from 'fs'

import { Drug } from './drug'
import { Pharmacy } from './pharmacy'

const drugs: Drug[] = [
  new Drug('Doliprane', 20, 30),
  new Drug('Herbal Tea', 10, 5, { positive: true }),
  new Drug('Fervex', 5, 40, {
    positive: true,
    unefficientExpired: true,
    benefitsPerDate: [
      {
        limitDate: 10,
        benefitValue: 2,
      },
      {
        limitDate: 5,
        benefitValue: 3,
      },
    ],
  }),
  new Drug('Magic Pill', 15, 40, { neverExpires: true }),
  new Drug('Dafalgan', 13, 43), // should give the same output if this line is commented
]

const trial = new Pharmacy(drugs)

const log: string[] = []

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(
    JSON.stringify(trial.updateBenefitValue(), (key, value) => {
      if (key == 'options') return undefined
      else return value
    })
  )
}

fs.writeFile('output.txt', log.toString(), (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('success')
  }
})
