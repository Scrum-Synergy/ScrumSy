import express from 'express';

import { getAllRevisionsPlan, createRevisionPlan, getRevisionPlan, updateRevisionPlan, deleteRevisionPlan } from '../controllers/revision.js';


const router = express.Router();

router.get('/', getAllRevisionsPlan);

router.post('/', createRevisionPlan);

router.get('/:id', getRevisionPlan);

router.put('/:id', updateRevisionPlan);

router.delete('/:id', deleteRevisionPlan);


export default router;