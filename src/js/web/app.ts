import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import testRouter from "./features/test/routes/test";
import characterRouter from "./features/character/routes/character";

dotenv.config();

const app: Express = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

// const testChar : CharacterDB = {
//   stats: {
//     strength: 2,
//     intelligence: 2,
//     dexterity: 2,
//     charisma: 2,
//     constitution: 2,
//     wisdom: 2
//   },
//   details: {
//     name: 'Biver',
//     race: 'bæver',
//     age: 2
//   },
//   proficiencyBonus: 0,
//   exhaustionLevel: 0,
//   _id: new ObjectId()
// }

// createCharacter(testChar).then((res) => {
//   console.log(res);
// });

// getAllCharacters().then((res) => {
//   console.log(res);
// });


app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/", testRouter);
app.use("/character", characterRouter);
