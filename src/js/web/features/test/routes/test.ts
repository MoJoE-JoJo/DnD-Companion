// @ts-ignore
import { Router } from 'express';
import { getBilbo } from '../repos/bilboRepo';
const router = Router();

router.get('/api/hello', (req, res) => {
        res.json({ message: 'Hello, World!' });
      });

router.get("/bilbo",(req, res) => {
  res.json(getBilbo());
})

export default router;