import { generateResumePDF } from '../services/resumeService.js';

export const buildResume = async (req, res) => {
  try {
    const { htmlContent } = req.body;
    const url = await generateResumePDF(htmlContent);
    res.json({ url });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
