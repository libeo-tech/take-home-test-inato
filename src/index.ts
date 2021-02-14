import fs from 'fs'

import { Drug } from './drug'
import { Pharmacy } from './pharmacy'

const drugs: Array<Drug> = [
  { name: 'Doliprane', expiresIn: 20, benefit: 30 },
  { name: 'Herbal Tea', expiresIn: 10, benefit: 5 },
  { name: 'Fervex', expiresIn: 5, benefit: 40 },
  { name: 'Magic Pill', expiresIn: 15, benefit: 40 },
]

const trial = new Pharmacy(drugs)

const log: Array<string> = Array(30).fill(0).map(() => JSON.stringify(trial.updateBenefitValue()))

/* eslint-disable no-console */
fs.writeFile('output.txt', log.join(','), err => {
  if (err) {
    console.log('error')
  } else {
    console.log('success')
  }
})
/* eslint-enable no-console */
