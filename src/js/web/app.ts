import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import testRouter from "./features/test/routes/test";
import characterRouter from "./features/character/routes/character";
import { testDatabaseConnection } from "./Database/DatabaseConnection";

dotenv.config();

const app: Express = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

testDatabaseConnection().then(() => {
  console.log("Hello");
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use("/", testRouter);
app.use("/character", characterRouter);
