import { config } from 'dotenv';
config();

import '@/ai/flows/generate-interview-questions';
import '@/ai/flows/transcribe-answer';
import '@/ai/flows/parse-resume';
import '@/ai/flows/evaluate-answer';
import '@/ai/flows/analyze-video-performance';
