import { Ability } from "./Abilities"
import { Proficiency } from "./Proficiency"

export type Skills = {
    acrobatics: Skill,
    animalHandling: Skill,
    arcana: Skill,
    athletics: Skill,
    deception: Skill,
    history: Skill,
    insight: Skill,
    intimation: Skill,
    investigation: Skill,
    medicine: Skill,
    nature: Skill,
    perception: Skill,
    performance: Skill,
    persuasion: Skill,
    recover: Skill,
    religion: Skill,
    sleightOfHand: Skill,
    stealth: Skill,
    survival: Skill
}

export type Skill = {
    proficiency: Proficiency,
    ability: Ability
}