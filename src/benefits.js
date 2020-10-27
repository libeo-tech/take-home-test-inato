export function defaultUpdateBenefit({ benefit, expiresIn }) {
  const newState = {
    benefit: benefit - 1,
    expiresIn: expiresIn - 1
  };
  if (newState.expiresIn < 0) {
    newState.benefit = newState.benefit - 1;
  }
  if (newState.benefit < 0) {
    newState.benefit = 0;
  }
  return newState;
}

export function herbalTeaUpdateBenefit({ benefit, expiresIn }) {
  const newState = {
    benefit: benefit + 1,
    expiresIn: expiresIn - 1
  };
  if (newState.expiresIn < 0) {
    newState.benefit = newState.benefit + 1;
  }
  if (newState.benefit > 49) {
    newState.benefit = 50;
  }
  return newState;
}

export function magicPillUpdateBenefit({ benefit, expiresIn }) {
  return { benefit, expiresIn };
}

export function fervexUpdateBenefit({ benefit, expiresIn }) {
  const newState = {
    benefit: benefit + 1,
    expiresIn: expiresIn - 1
  };
  if (newState.expiresIn < 11) {
    newState.benefit = newState.benefit + 1;
  }
  if (newState.expiresIn < 6) {
    newState.benefit = newState.benefit + 1;
  }
  if (newState.benefit > 49) {
    newState.benefit = 50;
  }
  if (newState.expiresIn < 0) {
    newState.benefit = 0;
  }
  return newState;
}

export function dafalganUpdateBenefit({ benefit, expiresIn }) {
  const newState = {
    benefit: benefit - 2,
    expiresIn: expiresIn - 1
  };
  if (newState.expiresIn < 0) {
    newState.benefit = newState.benefit - 2;
  }
  if (newState.benefit < 0) {
    newState.benefit = 0;
  }
  return newState;
}
