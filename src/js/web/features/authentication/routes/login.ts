import { Router } from 'express';
import { getAllUsers } from '../logic/utils';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { getAuthDuration, getAuthKey } from '../../_common/envHelpers';

const router = Router();


router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const users = getAllUsers();
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ message: 'User not found' });
    
    // Check password
    const isMatch = password === user.password;
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    // Create and sign a JWT
    const token = jwt.sign({ id: user.username }, getAuthKey(), { expiresIn: getAuthDuration() });
    
    // Send the token to the client
    res.json({ token });
});

export default router;