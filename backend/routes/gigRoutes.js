import express from 'express';
import { Getgigs, getgigbyuser, addgig } from '../controllers/gigController.js';

const router = express.Router();


router.route('/').get(Getgigs)
router.route('/:id').get(getgigbyuser)
router.post('/insert',addgig)

export default router;