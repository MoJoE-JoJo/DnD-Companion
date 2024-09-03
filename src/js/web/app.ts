import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import testRouter from "./features/test/routes/test";
import characterRouter from "./features/character/routes/character";
import loginRouter from "./features/authentication/routes/login";
import authenticateToken from "./features/authentication/logic/authMiddleware";
import { getPort } from "./features/_common/envHelpers";



dotenv.config();

const app: Express = express();
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const port = getPort() || 8080;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.use("/auth", loginRouter);

app.use(authenticateToken);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use("/", testRouter);
app.use("/character", characterRouter);

