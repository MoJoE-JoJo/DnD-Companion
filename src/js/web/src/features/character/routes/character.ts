// @ts-ignore
import { Router } from 'express';
import { getCharacter } from '../Repos/CharacterRepo';
const router = Router();

router.get("/:id", (req, res) => {
  res.json(getCharacter(req.params.id));
})

export default router;