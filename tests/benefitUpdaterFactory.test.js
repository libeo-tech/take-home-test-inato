import { BenefitUpdaterFactory } from '../src/BenefitUpdaterFactory';
import { BenefitUpdater } from '../src/benefitUpdater/BenefitUpdater';
import { FervexBenefitUpdater } from '../src/benefitUpdater/FervexBenefitUpdater';
import { HerbalTeaBenefitUpdate } from '../src/benefitUpdater/HerbalTeaBenefitUpdater';
import { MagicPillBenefitUpdater } from '../src/benefitUpdater/MagicPillBenefitUpdater';


describe("benfit Updater Factory", () => {
  it("should be instance of BenefitUpdater", () => {
    expect(new BenefitUpdaterFactory().createBenefitUpdater("Doliprane")).toBeInstanceOf(BenefitUpdater)
  })

  it("should be instance of FervexBenefitUpdater", () => {
    expect(new BenefitUpdaterFactory().createBenefitUpdater("Fervex")).toBeInstanceOf(FervexBenefitUpdater)
  })

  it("should be instance of HerbalTeaBenefitUpdate", () => {
    expect(new BenefitUpdaterFactory().createBenefitUpdater("Herbal Tea")).toBeInstanceOf(HerbalTeaBenefitUpdate)
  })

  it("should be instance of MagicPillBenefitUpdater", () => {
    expect(new BenefitUpdaterFactory().createBenefitUpdater("Magic Pill")).toBeInstanceOf(MagicPillBenefitUpdater)
  })
});