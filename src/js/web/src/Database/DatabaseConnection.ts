import { Collection, MongoClient, Document } from "mongodb";

export async function getCollection<T extends Document>(collectionName : string): Promise<Collection<T>> {
  const uri = process.env.MONGO_CONNECTIONSTRING ?? '';
  const mongoClient = await connectToCluster(uri);
  if (mongoClient == undefined) throw "connection to db was undefined";

  // get the Database
  const db = mongoClient.db('dnd-app');

  // return the requested collection, creates it if not already existing
  return db.collection<T>(collectionName);
}

async function connectToCluster(uri: string) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    await mongoClient.connect();

    return mongoClient;
  } catch (error) {
    console.error("Connection to MongoDB failed!", error);
  }
}

