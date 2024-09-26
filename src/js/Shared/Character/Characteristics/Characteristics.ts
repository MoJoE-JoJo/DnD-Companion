import { Alignment } from "./Alignment";
import { Appearance } from "./Apperance";
import { Language } from "./Language";
import { Size } from "./Size";

export type Characteristics = {
    name: string;
    race: string;
    age: number;
    size: Size;
    appearance: Appearance;
    faith: string | null;
    alignment: Alignment;
    languages: Language[];
    personalityTraits: string[];
    ideals: string[];
    bonds: string[];
    flaws: string[];
}