import express from 'express';
import { buildResume } from '../controllers/resumeController.js';
const router = express.Router();
router.post('/', buildResume);
export default router;
