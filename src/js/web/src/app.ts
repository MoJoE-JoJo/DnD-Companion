import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fs from "fs-extra";

import characterRouter from "@Features/Character/Routes/Character";

const sourceDirectory = '../client/src/Models';
const targetDirectory = 'src/Models';

fs.copySync(sourceDirectory, targetDirectory)

dotenv.config();

const app: Express = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/character", characterRouter);

