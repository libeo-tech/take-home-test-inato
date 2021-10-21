export function HerbalTeaBenefitValue(expiry, benefit){
  if(benefit < 50){
    if((benefit < 49) && (expiry < 0)){
      return benefit + 2;
    }
    else{
      return benefit + 1;
    }
  }
  else return benefit;
}

export function FervexBenefitValue(expiry, benefit){
  if(expiry < 0){
    return 0;
  }
  else if(benefit < 50){
    if((benefit < 48) && (expiry <= 5)){
      return benefit + 3;
    }
    else if((benefit < 49) && (expiry <= 10)){
      return benefit + 2;
    }
    else{
      return benefit + 1;
    }
  }
  else{
    return benefit;
  }
}

export function DafalganBenefitValue(expiry, benefit){
  if(expiry < 0){
    if(benefit > 3){
      return benefit - 4;
    }
    else{
      return 0;
    }
  }
  else if(benefit > 1){
    return benefit -2;
  }
  else return 0;
}

export function MagicPillBenefitValue(expiry, benefit){
  return benefit;
}

export function DefaultBenefitValue(expiry, benefit){
  if((expiry < 0) && (benefit > 1)){
    return benefit - 2;
  }
  else{
    return benefit - 1;
  }
}
