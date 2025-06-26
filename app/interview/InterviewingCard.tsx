import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, HelpCircle, ExternalLink, Info } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { VideoRecorder } from '@/components/video-recorder';
import type { QuestionObjectType } from '@/ai/flows/generate-interview-questions.schema';

interface InterviewingCardProps {
  currentQuestionObject: QuestionObjectType;
  currentQuestionIndex: number;
  generatedQuestions: QuestionObjectType[];
  speechSynthesisSupported: boolean;
  handleSpeakQuestion: () => void;
  handleVideoSubmission: (videoDataUri: string, facialData: any[]) => void;
  isLoading: boolean;
}

export function InterviewingCard({ currentQuestionObject, currentQuestionIndex, generatedQuestions, speechSynthesisSupported, handleSpeakQuestion, handleVideoSubmission, isLoading }: InterviewingCardProps) {
  if (!currentQuestionObject) return null;
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl bg-black border border-green-500/40">
      <CardHeader>
        <CardTitle className="text-green-400">Question {currentQuestionIndex + 1} of {generatedQuestions.length}</CardTitle>
        <CardDescription className="text-xl py-4 text-green-400 leading-relaxed">
          {currentQuestionObject.question}
        </CardDescription>
        <div className="flex flex-col sm:flex-row gap-2 items-start">
          {speechSynthesisSupported && (
            <Button onClick={handleSpeakQuestion} variant="outline" size="sm" className="self-start border-green-500 text-green-400 hover:bg-green-500/10">
              <Volume2 className="mr-2 h-4 w-4" /> Read Aloud
            </Button>
          )}
          {currentQuestionObject.guidanceLink && (
            <Button asChild variant="outline" size="sm" className="self-start border-green-500 text-green-400 hover:bg-green-500/10">
              <a href={currentQuestionObject.guidanceLink} target="_blank" rel="noopener noreferrer">
                <HelpCircle className="mr-2 h-4 w-4" /> Get Guidance <ExternalLink className="ml-1 h-3 w-3"/>
              </a>
            </Button>
          )}
        </div>
        {!speechSynthesisSupported && (
          <Alert variant="default" className="mt-2 text-sm bg-black border-green-500/40 text-green-400">
            <Info className="h-4 w-4 text-green-400"/>
            <AlertDescription className="text-white/80">
              Text-to-speech is not available in your browser. Please read the question manually.
            </AlertDescription>
          </Alert>
        )}
      </CardHeader>
      <CardContent>
        <VideoRecorder onRecordingComplete={handleVideoSubmission} isProcessing={isLoading} />
      </CardContent>
    </Card>
  );
} 