import { Characteristics } from "./Characteristics/Characteristics";
import { LingeringInjury } from "./LingeringInjury";
import { Resources } from "./Resources";
import { Stats } from "./Stats/Stats";
import { StatusEffects } from "./StatusEffects/StatusEffects";
import { Wealth } from "./Wealth";

export type Character = {
    stats: Stats;
    characteristics: Characteristics;
    exhaustionLevel: number;
    lingeringInjuries: LingeringInjury[] 
    resources: Resources;
    //statusEffects: StatusEffects;
}