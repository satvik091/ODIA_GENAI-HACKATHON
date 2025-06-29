import axios from 'axios';

export const whisperTranscribe = async (audioBase64) => {
  const { data } = await axios.post(process.env.WHISPER_API, { audio: audioBase64 });
  return data.text;
};
