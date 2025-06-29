import { llmGenerate } from '../services/llmService.js';

export const generateSuggestions = async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await llmGenerate(prompt);
    res.json({ response });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
