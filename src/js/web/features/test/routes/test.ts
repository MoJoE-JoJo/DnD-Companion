// @ts-ignore
import { Router } from 'express';
const router = Router();

router.get('/api/hello', (req, res) => {
        res.json({ message: 'Hello, World!' });
      });

export default router;