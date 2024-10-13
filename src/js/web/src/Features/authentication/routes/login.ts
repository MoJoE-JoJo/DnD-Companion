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
    const duration = Number(process.env.AUTH_DURATION_IN_HOURS ?? "1");
    res.cookie('jwt', token, {
        httpOnly: true,   // Prevent access via JavaScript
        secure: false,     // Only send the cookie over HTTPS
        sameSite: 'lax', // Protect against CSRF attacks (use 'Lax' or 'Strict')
        maxAge: duration * 60 * 60 * 1000 // the configured amount of hours in milliseconds
    });

    // Send the token to the client
    res.json({ token });
});

export default router;