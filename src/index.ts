import * as fs from 'fs'

import { Drug } from './drug'
import { Pharmacy } from './pharmacy'

const drugs: Drug[] = [
  new Drug('Doliprane', 20, 30),
  new Drug('Herbal Tea', 10, 5),
  new Drug('Fervex', 5, 40),
  new Drug('Magic Pill', 15, 40),
]
const trial = new Pharmacy(drugs)

const log: string[] = []

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()))
}

fs.writeFile('output.txt', log.toString(), (err) => {
  if (err) {
    console.log('error')
  } else {
    console.log('success')
  }
})
