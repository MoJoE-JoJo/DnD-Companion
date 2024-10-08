import { Alignment } from "./Alignment";
import { Appearance } from "./Apperance";
import { Language } from "./Language";
import { Size } from "./Size";

export type Characteristics = {
    name: string | undefined;
    species: string | undefined;
    age: number | undefined;
    size: Size | undefined;
    appearance: Appearance | undefined;
    background: string | undefined;
    faith: string | null | undefined;
    alignment: Alignment | undefined;
    languages: Language[] | undefined;
    personalityTraits: string[] | undefined;
    ideals: string[] | undefined;
    bonds: string[] | undefined;
    flaws: string[] | undefined;
}