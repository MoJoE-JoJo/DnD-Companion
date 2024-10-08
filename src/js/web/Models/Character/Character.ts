import { Characteristics } from "./Characteristics/Characteristics";
import { LingeringInjury } from "./LingeringInjury";
import { Resources } from "./Resources";
import { Stats } from "./Stats/Stats";
//import { StatusEffects } from "./Conditions/StatusEffects";

export type Character = {
    levels: ClassLevel[];
    stats: Stats;
    characteristics: Characteristics;
    exhaustionLevel: number;
    lingeringInjuries: LingeringInjury[] | undefined;
    resources: Resources | undefined;
    //conditions: ConditionSource[];
}

type ClassLevel = {
    class: string;
    level: number;
}