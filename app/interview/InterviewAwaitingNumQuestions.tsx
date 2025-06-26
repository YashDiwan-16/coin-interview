import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileText, Wand2 } from 'lucide-react';
import type { ParseResumeOutput } from '@/ai/flows/parse-resume';
import { Dispatch, SetStateAction } from 'react';

interface InterviewAwaitingNumQuestionsProps {
  parsedResumeData: ParseResumeOutput | null;
  numberOfQuestions: number;
  setNumberOfQuestions: Dispatch<SetStateAction<number>>;
  handleGenerateQuestions: () => void;
  isLoading: boolean;
}

export function InterviewAwaitingNumQuestions({ parsedResumeData, numberOfQuestions, setNumberOfQuestions, handleGenerateQuestions, isLoading }: InterviewAwaitingNumQuestionsProps) {
  return (
    <Card className="w-full max-w-lg mx-auto text-center shadow-lg bg-black border border-green-500/40">
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2 text-green-400"><FileText className="h-6 w-6 text-green-400" />Resume Parsed!</CardTitle>
        <CardDescription className="text-white/80">We've extracted key information. Now, how many questions would you like?</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {parsedResumeData && (
          <div className="text-left text-sm space-y-2 bg-green-500/10 p-4 rounded-md border border-green-500/30">
            <p className="text-green-400"><strong>Skills:</strong> <span className="text-white/90">{parsedResumeData.skills.join(', ') || 'Not found'}</span></p>
            <p className="text-green-400"><strong>Experience Snippet:</strong> <span className="text-white/90">{parsedResumeData.workExperience[0]?.substring(0,100) || 'Not found'}...</span></p>
          </div>
        )}
        <div className="space-y-2">
          <Label htmlFor="num-questions" className="text-left block text-green-400">Number of Questions (1-20):</Label>
          <Input
            id="num-questions"
            type="number"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(parseInt(e.target.value, 10))}
            min="1"
            max="20"
            className="w-full bg-black border-green-500 text-green-400 focus:ring-green-500"
            disabled={isLoading}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleGenerateQuestions} className="w-full bg-green-500 hover:bg-green-600 text-black font-bold border-green-500" disabled={isLoading}>
          <Wand2 className="mr-2 h-5 w-5" /> Generate Interview Questions
        </Button>
      </CardFooter>
    </Card>
  );
} 