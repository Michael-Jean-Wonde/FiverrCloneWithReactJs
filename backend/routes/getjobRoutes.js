import express from 'express';
import { buyerRelatedJob} from '../controllers/jobController.js';

const router = express.Router();


router.route('/:id').get(buyerRelatedJob)

export default router;