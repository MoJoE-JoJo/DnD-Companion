import { Details } from "./Details";
import { Stats } from "./Stats";

export type Character = {
    _id: any;
    stats: Stats;
    details: Details;
    proficiencyBonus: number;
    exhaustionLevel: number;
}