import { whisperTranscribe } from '../services/asrService.js';

export const transcribeAudio = async (req, res) => {
  try {
    const { audio } = req.body; // base64 string
    const text = await whisperTranscribe(audio);
    res.json({ text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
