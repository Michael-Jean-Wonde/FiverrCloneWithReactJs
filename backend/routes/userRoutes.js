import express from 'express';
import { authUser, getUserProfile, registerUser } from '../controllers/userController.js';

const router = express.Router();
import {secure} from '../middleware/authMiddleware.js';


router.post('/register',registerUser);
router.post('/login', authUser);
router.route('/profile').get(secure, getUserProfile)

export default router;