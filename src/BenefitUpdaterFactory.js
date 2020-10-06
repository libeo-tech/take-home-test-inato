import { BenefitUpdater } from './benefitUpdater/BenefitUpdater';
import { HerbalTeaBenefitUpdate } from './benefitUpdater/HerbalTeaBenefitUpdater';
import { FervexBenefitUpdater } from './benefitUpdater/FervexBenefitUpdater';
import { MagicPillBenefitUpdater } from './benefitUpdater/MagicPillBenefitUpdater';
import { DafalganBenefitUpdater } from './benefitUpdater/DafalganBenefitUpdater';

export class BenefitUpdaterFactory {
  constructor(){
    this.instances = new Map([["Basic", new BenefitUpdater()]]);
  }

  getBenefitUpdater(type){

    if(type === "Herbal Tea"){
      if(!this.instances.has("Herbal Tea"))
        this.instances.set("Herbal Tea", new HerbalTeaBenefitUpdate());
      return this.instances.get("Herbal Tea");
    }

    if(type === "Fervex"){
      if(!this.instances.has("Fervex"))
        this.instances.set("Fervex", new FervexBenefitUpdater());
      return this.instances.get("Fervex");
    }

    if(type === "Magic Pill"){
      if(!this.instances.has("Magic Pill"))
        this.instances.set("Magic Pill", new MagicPillBenefitUpdater());
      return this.instances.get("Magic Pill");
    }

    if(type === "Dafalgan"){
      if(!this.instances.has("Dafalgan"))
        this.instances.set("Dafalgan", new DafalganBenefitUpdater());
      return this.instances.get("Dafalgan");
    }

    if(!this.instances.has("Basic"))
      this.instances.set("Basic", new BenefitUpdater());
    return this.instances.get("Basic");
  }
}