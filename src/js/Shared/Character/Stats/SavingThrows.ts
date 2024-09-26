import { Ability } from "./Abilities"
import { Proficiency } from "./Proficiency"

export type SavingThrows = {
    strength: SavingThrow,
    dexterity: SavingThrow,
    constitution: SavingThrow,
    intelligence: SavingThrow,
    wisdom: SavingThrow,
    charisma: SavingThrow
}

export type SavingThrow = {
    ability: Ability,
    proficiency: Proficiency
}

