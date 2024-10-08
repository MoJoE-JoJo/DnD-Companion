// @ts-ignore
import { Router } from 'express';
import { getAllCharacters, getCharacterByID, getCharacterByName } from '../repos/characterRepo';
const router = Router();

router.get("/:id", (req, res) => {
  res.json(getCharacterByID(req.params.id));
})

router.get("/", (_, res) => {
  res.json(getAllCharacters());
})

export default router;