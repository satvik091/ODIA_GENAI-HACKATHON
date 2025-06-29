import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import asrRoutes from './routes/asr.js';
import llmRoutes from './routes/llm.js';
import resumeRoutes from './routes/resume.js';
import interviewRoutes from './routes/interview.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB error', err));

app.get('/', (_, res) => res.json({ status: 'SkillMate backend running' }));

app.use('/api/asr', asrRoutes);
app.use('/api/llm', llmRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/interview', interviewRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
