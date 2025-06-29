import axios from 'axios';

export const llmGenerate = async (prompt) => {
  const { data } = await axios.post(process.env.LLM_API, { prompt });
  return data.text || data.response;
};
