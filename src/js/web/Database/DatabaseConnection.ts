import { Collection, MongoClient } from "mongodb";
import { Character } from "../../Shared/models";

export async function getClient(): Promise<MongoClient> {
  //TODO get connectionstring from some config one day.
  const uri = "mongodb://localhost:27017";
  const mongoClient = await connectToCluster(uri);
  if (mongoClient == undefined) throw "connection to db was undefined";

  return mongoClient;
}

export async function testDatabaseConnection() {
  const client = await getClient();
  var collection = getCollection<Character>("Characters", client);
  const newChar: Character = {
    _id: undefined,
    details: {
      name: "peter pedal",
      age: 42,
      race: "monki",
    },
    stats: {
      charisma: 20,
      constitution: 20,
      dexterity: 20,
      intelligence: 20,
      strength: 20,
      wisdom: 20,
    },
    exhaustionLevel: 0,
    proficiencyBonus: 0,
  };

  const uploadedChar = await createCharacter(collection, newChar);

  const findChar = await findCharacterByID(collection, uploadedChar._id);

  console.log(findChar);

  await mongoClient.close();
}

export async function connectToCluster(uri: string) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    await mongoClient.connect();

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB failed!", error);
  }
}

export async function createCharacter(
  collection: Collection<Character>,
  character: Character
): Promise<Character> {
  const res = await collection.insertOne(character);
  character._id = res.insertedId;
  return character;
}

export async function findCharacterByID(
  collection: Collection<Character>,
  id: any
) {
  return await collection.findOne({ _id: id });
}
