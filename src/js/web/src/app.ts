import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import fs from "fs-extra";
import characterRouter from "@Features/character/routes/character";
import loginRouter from "@Features/authentication/routes/login";
import { getCopyModels, getPort } from "@Features/_common/envHelpers";
import authenticateToken from "@Features/authentication/logic/authMiddleware";

dotenv.config();

const app: Express = express();
const cors = require("cors");
app.use(bodyParser.json());

const corsOptions = {
  origin:  `http://localhost:3000`, // Replace with your frontend domain
  credentials: true // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

const port = getPort() || 8080;


if(getCopyModels()){
  console.log("Copying models to client directory: Started");
  const sourceDirectory = 'src/Models';
  const targetDirectory = '../client/src/Models';
  
  fs.copySync(sourceDirectory, targetDirectory)
  console.log("Copying models to client directory: Finished");
}

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use("/auth", loginRouter);

app.use(authenticateToken);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/character", characterRouter);
