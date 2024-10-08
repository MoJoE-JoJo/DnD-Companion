import { Alignment } from "../../../../Shared/Character/Characteristics/Alignment";
import { Size } from "../../../../Shared/Character/Characteristics/Size";
import { Proficiency } from "../../../../Shared/Character/Stats/Proficiency";
import { Character } from "../../../../Shared/models";


export function getCharacter(id: string): Character {
    switch (id) {
        case "0":
            return getChell();
        case "1":
            return getBaseCharacter("Fleck");
        case "2":
            return getBaseCharacter("Rafan");
        case "3":
            return getBaseCharacter("Kasimir");
        default:
            return getChell();
    }
}

function getBaseCharacter(name: string): Character {
    return {
        levels: [
            {
                class: "Fighter",
                level: 1,
            }
        ],
        characteristics: {
            name: name,
            species: undefined,
            age: 42,
            size: Size.Medium,
            background: undefined,
            appearance: undefined,
            faith: undefined,
            alignment: Alignment.Neutral,
            languages: undefined,
            personalityTraits: undefined,
            ideals: undefined,
            bonds: undefined,
            flaws: undefined,
        },
        stats: {
            abilitieScores: {
                charisma: 10,
                constitution: 10,
                dexterity: 10,
                intelligence: 10,
                strength: 10,
                wisdom: 10
            },
            armorClass: 10,
            skills: undefined,
            savingThrows: undefined
        },
        exhaustionLevel: 0,
        lingeringInjuries: undefined,
        resources: undefined
    }
}


function getChell(): Character {
    return {
        levels: [
            {
                class: "Druid",
                level: 12,
            }
        ],
        characteristics: {
            name: "Chell",
            species: "Tortle",
            age: 12,
            size: Size.Medium,
            appearance: undefined,
            background: "Hermit",
            faith: undefined,
            alignment: Alignment.Neutral,
            languages: undefined,
            personalityTraits: undefined,
            ideals: undefined,
            bonds: undefined,
            flaws: undefined,
        },
        stats: {
            abilitieScores: {
                strength: 6,
                dexterity: 10,
                constitution: 18,
                intelligence: 12,
                wisdom: 20,
                charisma: 12
            },
            armorClass: 10,
            skills: undefined,
            savingThrows: {
                strength: Proficiency.None,
                charisma: Proficiency.None,
                dexterity: Proficiency.None,
                constitution: Proficiency.Proficient,
                intelligence: Proficiency.Proficient,
                wisdom: Proficiency.Expertise
            }
        },
        exhaustionLevel: 3,
        lingeringInjuries: undefined,
        resources: undefined
    };
}