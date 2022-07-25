import express from 'express';
import { Getgigs, getgigbyuser, addgig } from '../controllers/gigController.js';
import { secure } from '../middleware/authMiddleware.js';
const router = express.Router();


router.route('/').get(Getgigs)
router.route('/:id').get(secure, getgigbyuser)
router.post('/insert',addgig)

export default router;