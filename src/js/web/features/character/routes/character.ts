import { Router } from 'express';
import { deleteCharacter, getAllCharacters, getCharacter as getMockCharacterData } from '../repos/characterRepo';
const router = Router();

router.get("/:id", async (req, res) => {
  res.json(await getMockCharacterData(req.params.id));
})

router.delete("/:id", async (req, res) => {
  res.json(await deleteCharacter(req.params.id));
})

router.get("/", (_, res) => {
  res.json(getAllCharacters());
})

export default router;