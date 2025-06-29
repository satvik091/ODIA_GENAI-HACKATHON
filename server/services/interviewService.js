import { llmGenerate } from './llmService.js';

export const interviewGenerate = async (role) => {
  const prompt = `Generate 5 mock interview questions and ideal answers for the role: ${role}. Return JSON array of objects with 'question' and 'answer'.`;
  const txt = await llmGenerate(prompt);
  try {
    return JSON.parse(txt);
  } catch {
    return txt;
  }
};
