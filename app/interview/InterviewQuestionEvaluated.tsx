import { AnswerEvaluation } from '@/components/answer-evaluation';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import type { EvaluateAnswerOutput } from '@/ai/flows/evaluate-answer';
import type { AnalyzeVideoPerformanceOutput } from '@/ai/flows/analyze-video-performance';

interface InterviewQuestionEvaluatedProps {
  questionText: string;
  transcribedText: string | null;
  evaluation: string | null;
  score: number | null;
  followUpQuestion: string | null;
  expectedAnswerElements: string | null;
  suggestedResources: any;
  videoAnalysis: AnalyzeVideoPerformanceOutput | null;
  handleNextQuestion: () => void;
  isLastQuestion: boolean;
}

export function InterviewQuestionEvaluated({ questionText, transcribedText, evaluation, score, followUpQuestion, expectedAnswerElements, suggestedResources, videoAnalysis, handleNextQuestion, isLastQuestion }: InterviewQuestionEvaluatedProps) {
  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 bg-black border border-green-500/40 rounded-xl p-6">
      <AnswerEvaluation 
        questionText={questionText}
        transcribedText={transcribedText}
        evaluation={evaluation}
        score={score}
        followUpQuestion={followUpQuestion}
        expectedAnswerElements={expectedAnswerElements}
        suggestedResources={suggestedResources}
        videoAnalysis={videoAnalysis}
      />
      <Button onClick={handleNextQuestion} size="lg" className="w-full bg-green-500 hover:bg-green-600 text-black font-bold border-green-500">
        {isLastQuestion ? 'Finish Interview' : 'Next Question'}
        <ChevronRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
} 