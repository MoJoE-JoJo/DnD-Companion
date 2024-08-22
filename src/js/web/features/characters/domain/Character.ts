import { Details } from "./Details";
import { Stats } from "./Stats";

export type Character = {
    stats: Stats;
    details: Details;
    proficiencyBonus: number;
    exhaustionLevel: number;
}