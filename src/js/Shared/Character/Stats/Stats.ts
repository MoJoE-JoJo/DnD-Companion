import { AbilitieScores } from "./Abilities"
import { SavingThrows } from "./SavingThrows"
import { Skills } from "./Skills"

export type Stats = {
    abilitieScores: AbilitieScores,
    skills: Skills,
    savingThrows: SavingThrows,
    armorClass: number
}