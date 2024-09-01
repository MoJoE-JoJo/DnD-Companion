import {Character } from "../../../../Shared/models";


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

function getBaseCharacter(name: string) : Character {
    return {
        details: {
            name: name,
            age: 42,
            race: "Uhhh"
        },
        stats: {
            charisma: 10,
            constitution: 10,
            dexterity: 10,
            intelligence: 10,
            strength: 10,
            wisdom: 10
        },
        exhaustionLevel: 0,
        proficiencyBonus: 0
    }
}


function getChell() {
    return {
        details: {
            name: "Chell",
            race: "Tortle",
            age: 12
        },
        exhaustionLevel: 3,
        proficiencyBonus: 5,
        stats: {
            strength: 6,
            dexterity: 10,
            constitution: 18,
            intelligence: 12,
            wisdom: 20,
            charisma: 12
        }
    };
}