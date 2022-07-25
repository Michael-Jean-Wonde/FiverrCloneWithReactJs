import express from 'express';
import { Addjob, getjobbyuser} from '../controllers/jobController.js';
import { secure } from '../middleware/authMiddleware.js';
const router = express.Router();


router.post('/insert', Addjob)
router.route('/:id').get(secure, getjobbyuser)

export default router;