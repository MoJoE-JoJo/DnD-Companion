import { ObjectId } from "mongodb";
import { Character } from "../../../../Shared/models";
import { getCollection } from "../../../Database/DatabaseConnection";
import { CharacterDB } from "../../../Database/Models/CharacterDb";

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

function getBaseCharacter(name: string): Character {
  return {
    details: {
      name: name,
      age: 42,
      race: "Uhhh",
    },
    stats: {
      charisma: 10,
      constitution: 10,
      dexterity: 10,
      intelligence: 10,
      strength: 10,
      wisdom: 10,
    },
    exhaustionLevel: 0,
    proficiencyBonus: 0,
  };
}

function getChell(): Character {
  return {
    details: {
      name: "Chell",
      race: "Tortle",
      age: 12,
    },
    exhaustionLevel: 3,
    proficiencyBonus: 5,
    stats: {
      strength: 6,
      dexterity: 10,
      constitution: 18,
      intelligence: 12,
      wisdom: 20,
      charisma: 12,
    },
  };
}
