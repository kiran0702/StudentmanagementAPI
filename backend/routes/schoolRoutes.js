import { Router } from 'express';
import { addSchool, listSchools } from '../controllers/schoolController.js';

const router = Router();

router.post('/addSchool', addSchool);
router.get('/listSchools', listSchool);

export default router;
