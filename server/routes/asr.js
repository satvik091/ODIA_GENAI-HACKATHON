import express from 'express';
import { transcribeAudio } from '../controllers/asrController.js';
const router = express.Router();
router.post('/', transcribeAudio);
export default router;
