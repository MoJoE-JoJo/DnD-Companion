import { Character } from "../domain/Character";

export function getCharacter(id: string): Character {
    switch (id) {
        case "0":
            return getChell();
        default:
            return getChell();
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