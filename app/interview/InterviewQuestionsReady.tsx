import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Video } from 'lucide-react';
import type { QuestionObjectType } from '@/ai/flows/generate-interview-questions.schema';

interface InterviewQuestionsReadyProps {
  generatedQuestions: QuestionObjectType[];
  handleStartInterview: () => void;
}

export function InterviewQuestionsReady({ generatedQuestions, handleStartInterview }: InterviewQuestionsReadyProps) {
  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg bg-black border border-green-500/40">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2 text-green-400"><CheckCircle className="h-6 w-6 text-green-400" />Questions Generated!</CardTitle>
        <CardDescription className="text-white/80">{generatedQuestions.length} personalized questions are ready for you.</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleStartInterview} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold border-green-500">
          <Video className="mr-2 h-5 w-5" /> Start Video Interview
        </Button>
      </CardContent>
    </Card>
  );
} 