import { InterviewSummary } from '@/components/interview-summary';
import { Button } from '@/components/ui/button';
import { RotateCcw } from 'lucide-react';

interface InterviewLog {
  question: string;
  guidanceLink?: string;
  videoUri: string | null;
  transcribedAnswer: string | null;
  evaluation: any;
  videoAnalysis: any;
}

interface InterviewCompleteProps {
  interviewLog: InterviewLog[];
  handleRestart: () => void;
}

export function InterviewComplete({ interviewLog, handleRestart }: InterviewCompleteProps) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-6 bg-black border border-green-500/40 rounded-xl p-6">
      <InterviewSummary interviewData={interviewLog} />
      <Button onClick={handleRestart} variant="outline" size="lg" className="w-full border-green-500 text-green-400 hover:bg-green-500/10">
        <RotateCcw className="mr-2 h-5 w-5" /> Start New Interview
      </Button>
    </div>
  );
} 