import { z } from 'genkit';

export const QuestionObjectSchema = z.object({
  question: z.string().describe('The interview question text.'),
  guidanceLink: z.string().describe('A URL (e.g., Google search) to help understand the question.'),
});
export type QuestionObjectType = z.infer<typeof QuestionObjectSchema>; 