import { interviewGenerate } from '../services/interviewService.js';

export const generateInterviewQA = async (req, res) => {
  try {
    const { role } = req.body;
    const qa = await interviewGenerate(role);
    res.json({ qa });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
