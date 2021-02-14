import fs from 'fs'

import { Drug } from './drug'
import { Pharmacy } from './pharmacy'

const drugs: Array<Drug> = [
  Drug.Create('Doliprane', 20, 30),
  Drug.Create('Herbal Tea', 10, 5),
  Drug.Create('Fervex', 5, 40),
  Drug.Create('Magic Pill', 15, 40),
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
