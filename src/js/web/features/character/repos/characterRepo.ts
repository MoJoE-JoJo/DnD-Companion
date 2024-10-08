import { ObjectId } from "mongodb";
import { Character } from "../../../../Shared/models";
import { getCollection } from "../../../Database/DatabaseConnection";
import { CharacterDB } from "../../../Database/Models/CharacterDb";
import { Size } from "../../../../Shared/Character/Characteristics/Size";
import { Alignment } from "../../../../Shared/Character/Characteristics/Alignment";

const collectionString = "characters";

export async function createCharacter(character: CharacterDB): Promise<CharacterDB> {
  var collection = await getCollection<CharacterDB>(collectionString);
  
  const res = await collection.insertOne(character);
  character._id = res.insertedId;
  return character;
}

export async function getCharacterByID(id: string) {
  var collection = await getCollection<Character>(collectionString);
  console.log(id);
  return await collection.findOne({ _id: new ObjectId(id) });
}

export async function getCharacterByName(name: string) {
    var collection = await getCollection<Character>(collectionString);
    return await collection.findOne({ "details.name": name });
  }

export async function getAllCharacters()
{
    var collection = await getCollection<Character>(collectionString);
    var findCursor = collection.find();
    const characters = await findCursor.toArray();
    return characters;
}


// ========= OLD TEMP DATA BELOW =========

function getBaseCharacter(name: string) : Character {
    return {
        levels: [
            {
                class:"fighter",
                level: 1,
            }
        ],
        characteristics: {
            name: "PH",
            race: undefined,
            age: 42,
            size: Size.Medium,
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
            abilitieScores:{
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


function getChell() {
    return {
        levels: [
            {
                class:"Druid",
                level: 12,
            }
        ],
        characteristics: {
            name: "Chell",
            race: "Tortle",
            age: 12,
            size: Size.Medium,
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
            abilitieScores:{
                strength: 6,
                dexterity: 10,
                constitution: 18,
                intelligence: 12,
                wisdom: 20,
                charisma: 12
            },
            armorClass: 10,
            skills: undefined,
            savingThrows: undefined
        },
        exhaustionLevel: 3,
        lingeringInjuries: undefined,
        resources: undefined
    };
}
