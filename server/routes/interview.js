import express from 'express';
import { generateInterviewQA } from '../controllers/interviewController.js';
const router = express.Router();
router.post('/', generateInterviewQA);
export default router;
