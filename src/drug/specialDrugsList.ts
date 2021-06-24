import { Dafalgan } from "./specialDrugs/dafalgan";
import { Fervex } from "./specialDrugs/fervex";
import { HerbalTea } from "./specialDrugs/herbalTea";
import { MagicPill } from "./specialDrugs/magicPill";

export const SpecialDrugsNames = {
    HerbalTea: "Herbal Tea",
    MagicPill: "Magic Pill",
    Fervex: "Fervex",
    Dafalgan: "Dafalgan"
};

export const SpecialDrugs = {
    [SpecialDrugsNames.HerbalTea]: HerbalTea,
    [SpecialDrugsNames.MagicPill]: MagicPill,
    [SpecialDrugsNames.Fervex]: Fervex,
    [SpecialDrugsNames.Dafalgan]: Dafalgan
};
