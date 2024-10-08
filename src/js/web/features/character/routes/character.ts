// @ts-ignore
import { Router } from 'express';
import { getAllCharacters, getCharacter } from '../repos/characterRepo';
const router = Router();

router.get("/:id", (req, res) => {
  res.json(getCharacter(req.params.id));
})

router.get("/", (_, res) => {
  res.json(getAllCharacters());
})

export default router;