import express from 'express';
import { generateSuggestions } from '../controllers/llmController.js';
const router = express.Router();
router.post('/', generateSuggestions);
export default router;
