const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

function doliprane(d) {
  d.expiresIn--;
  if (d.expiresIn < 0) {
    d.benefit--;
  }
  d.benefit = Math.max(d.benefit - 1, MIN_BENEFIT);

  return d;
}

function herbalTea(d) {
  d.expiresIn--;

  if (d.expiresIn < 0) {
    d.benefit++;
  }
  d.benefit = Math.min(d.benefit + 1, MAX_BENEFIT);

  return d;
}

function fervex(d) {
  if (d.expiresIn < 11) {
    d.benefit++;
  }
  if (d.expiresIn < 6) {
    d.benefit++;
  }
  d.benefit = Math.min(d.benefit + 1, MAX_BENEFIT);

  d.expiresIn--;
  if (d.expiresIn < 0) {
    d.benefit = MIN_BENEFIT;
  }

  return d;
}

function magicPill(d) {
  return d;
}

const drugsfn = {
  Doliprane: doliprane,
  "Herbal Tea": herbalTea,
  Fervex: fervex,
  "Magic Pill": magicPill
};

/* NOTE: As it is written in index.js I am going against the assignment
 *       Creating classes for everything is not a good design, in this little
 *       project a simple set of funcitons will do the trick.
 */
export function updateBenefitValue(drugs) {
  return drugs.map(d => {
    let fn = drugsfn[d.name];
    // NOTE: If the drugs is unknown it will return the drug as it is.
    if (!fn) {
      return d;
    }
    return fn(d);
  });
}
