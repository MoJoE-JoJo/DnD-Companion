import { Router } from 'express';
import * as characterRepo from '../repos/characterRepo';

const router = Router();

router.get("/:id", async (req, res) => {
  res.json(await characterRepo.getCharacter(req.params.id));
})

router.delete("/:id", async (req, res) => {
  res.json(await characterRepo.deleteCharacter(req.params.id));
})

router.get("/", (_, res) => {
  res.json(characterRepo.getAllCharacters());
})

export default router;