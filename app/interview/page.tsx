"use client";

import { useState, useEffect, useCallback } from 'react';
import type { ParseResumeOutput } from '@/ai/flows/parse-resume';
import { parseResume } from '@/ai/flows/parse-resume';
import type { GenerateInterviewQuestionsOutput } from '@/ai/flows/generate-interview-questions';
import type { QuestionObjectType } from '@/ai/flows/generate-interview-questions.schema';
import { generateInterviewQuestions } from '@/ai/flows/generate-interview-questions';
import type { TranscribeAnswerOutput } from '@/ai/flows/transcribe-answer';
import { transcribeAnswer } from '@/ai/flows/transcribe-answer';
import type { EvaluateAnswerOutput } from '@/ai/flows/evaluate-answer';
import { evaluateAnswer } from '@/ai/flows/evaluate-answer';
import type { AnalyzeVideoPerformanceOutput } from '@/ai/flows/analyze-video-performance';
import { analyzeVideoPerformance } from '@/ai/flows/analyze-video-performance';

import { ResumeUploader } from '@/components/resume-uploader';
import { VideoRecorder } from '@/components/video-recorder';
import { AnswerEvaluation } from '@/components/answer-evaluation';
import { LoadingIndicator } from '@/components/loading-indicator';
import { InterviewSummary } from '@/components/interview-summary';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { FileText, Brain, Mic, Volume2, ChevronRight, RotateCcw, CheckCircle, ListChecks, Info, AlertTriangle, ExternalLink, HelpCircle, Wand2, Video } from 'lucide-react';
import { InterviewErrorCard } from './InterviewErrorCard';
import { InterviewAwaitingNumQuestions } from './InterviewAwaitingNumQuestions';
import { InterviewQuestionsReady } from './InterviewQuestionsReady';
import { InterviewingCard } from './InterviewingCard';
import { InterviewQuestionEvaluated } from './InterviewQuestionEvaluated';
import { InterviewComplete } from './InterviewComplete';

// --- Types ---
type InterviewStage =
  | 'INITIAL'
  | 'RESUME_PARSING'
  | 'RESUME_PARSED'
  | 'AWAITING_NUM_QUESTIONS'
  | 'GENERATING_QUESTIONS'
  | 'QUESTIONS_READY'
  | 'INTERVIEWING'
  | 'PROCESSING_ANSWER'
  | 'QUESTION_EVALUATED'
  | 'INTERVIEW_COMPLETE'
  | 'ERROR_STATE';

interface InterviewLog {
  question: string;
  guidanceLink?: string;
  videoUri: string | null;
  transcribedAnswer: string | null;
  evaluation: EvaluateAnswerOutput | null;
  videoAnalysis: AnalyzeVideoPerformanceOutput | null;
}

export default function InterviewPage() {
  const [stage, setStage] = useState<InterviewStage>('INITIAL');
  const [parsedResumeData, setParsedResumeData] = useState<ParseResumeOutput | null>(null);
  const [parsedResumeString, setParsedResumeString] = useState<string>('');
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(3);
  const [generatedQuestions, setGeneratedQuestions] = useState<QuestionObjectType[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  const [currentRecordedVideoUri, setCurrentRecordedVideoUri] = useState<string | null>(null);
  const [currentTranscribedAnswer, setCurrentTranscribedAnswer] = useState<string | null>(null);
  const [currentEvaluation, setCurrentEvaluation] = useState<EvaluateAnswerOutput | null>(null);
  const [currentVideoAnalysis, setCurrentVideoAnalysis] = useState<AnalyzeVideoPerformanceOutput | null>(null);
  
  const [interviewLog, setInterviewLog] = useState<InterviewLog[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  const { toast } = useToast();
  const [speechSynthesisSupported, setSpeechSynthesisSupported] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.speechSynthesis) {
      setSpeechSynthesisSupported(false);
    }
  }, []);

  const handleError = useCallback((message: string, error?: any) => {
    console.error(message, error);
    setErrorMessage(message);
    setStage('ERROR_STATE');
    setIsLoading(false);
    toast({ title: "An Error Occurred", description: message, variant: "destructive" });
  }, [toast]);

  const handleResumeUpload = useCallback(async (file: File) => {
    setIsLoading(true);
    setLoadingMessage('Parsing your resume...');
    setStage('RESUME_PARSING');
    setErrorMessage(null);

    try {
      const reader = new FileReader();
      reader.onloadend = async () => {
        const resumeDataUri = reader.result as string;
        const parsedData = await parseResume({ resumeDataUri });
        setParsedResumeData(parsedData);
        const summaryString = `Work Experience: ${parsedData.workExperience.join(', ') || 'N/A'}. Skills: ${parsedData.skills.join(', ') || 'N/A'}. Projects: ${parsedData.projects.join(', ') || 'N/A'}.`;
        setParsedResumeString(summaryString);
        setStage('AWAITING_NUM_QUESTIONS');
        setIsLoading(false);
        toast({ title: "Resume Parsed", description: "Your resume has been successfully parsed." });
      };
      reader.onerror = () => handleError('Failed to read resume file.');
      reader.readAsDataURL(file);
    } catch (error) {
      handleError('Failed to parse resume.', error);
    }
  }, [handleError, toast]);

  const handleGenerateQuestions = useCallback(async () => {
    if (!parsedResumeString) {
      handleError('Cannot generate questions without parsed resume data.');
      return;
    }
    if (numberOfQuestions <= 0 || numberOfQuestions > 20) {
        handleError('Please enter a valid number of questions (1-20).');
        return;
    }
    setIsLoading(true);
    setLoadingMessage('Generating interview questions...');
    setStage('GENERATING_QUESTIONS');
    setErrorMessage(null);

    try {
      const result: GenerateInterviewQuestionsOutput = await generateInterviewQuestions({ 
        resumeData: parsedResumeString,
        numberOfQuestions: numberOfQuestions 
      });
      setGeneratedQuestions(result.questions);
      setStage('QUESTIONS_READY');
      setIsLoading(false);
      toast({ title: "Questions Generated", description: "Your personalized interview questions are ready!" });
    } catch (error) {
      handleError('Failed to generate interview questions.', error);
    }
  }, [parsedResumeString, handleError, toast, numberOfQuestions]);

  const handleStartInterview = () => {
    setCurrentQuestionIndex(0);
    setInterviewLog([]);
    setCurrentRecordedVideoUri(null);
    setCurrentTranscribedAnswer(null);
    setCurrentEvaluation(null);
    setCurrentVideoAnalysis(null);
    setStage('INTERVIEWING');
  };
  
  const handleVideoSubmission = useCallback(async (videoDataUri: string, facialData: any[]) => {
    setCurrentRecordedVideoUri(videoDataUri);
    setIsLoading(true);
    setLoadingMessage('Processing your answer (transcribing, evaluating & analyzing performance)...');
    setStage('PROCESSING_ANSWER');
    setErrorMessage(null);
    const currentQuestionObject = generatedQuestions[currentQuestionIndex];

    try {
      if (!parsedResumeString || !currentQuestionObject?.question) {
        throw new Error("Missing data for evaluation.");
      }
      
      setLoadingMessage('Analyzing your performance...');
      
      // Start transcription and facial data analysis in parallel
      const transcribePromise = transcribeAnswer({ audioDataUri: videoDataUri });
      
      const facialDataJson = JSON.stringify(facialData);
      const videoAnalysisPromise = analyzeVideoPerformance({ facialDataJson });

      // Wait for transcription to finish, as evaluation depends on it
      const transcriptionResult = await transcribePromise;
      const transcription = transcriptionResult.transcription;
      setCurrentTranscribedAnswer(transcription);

      // Now start the evaluation, which needs the transcription
      const evaluatePromise = evaluateAnswer({
        question: currentQuestionObject.question,
        answer: transcription,
        resumeData: parsedResumeString,
      });

      // Wait for the remaining promises to resolve
      const [videoAnalysisResult, finalEvaluationResult] = await Promise.all([
        videoAnalysisPromise,
        evaluatePromise
      ]);

      setCurrentVideoAnalysis(videoAnalysisResult);
      setCurrentEvaluation(finalEvaluationResult);

      setInterviewLog(prevLog => [
        ...prevLog,
        {
          question: currentQuestionObject.question,
          guidanceLink: currentQuestionObject.guidanceLink,
          videoUri: videoDataUri,
          transcribedAnswer: transcription,
          evaluation: finalEvaluationResult,
          videoAnalysis: videoAnalysisResult,
        }
      ]);

      setStage('QUESTION_EVALUATED');
      setIsLoading(false);
      toast({ title: "Answer Processed", description: "Your answer has been fully analyzed." });

    } catch (error) {
      handleError('Failed to process your answer.', error);
      setInterviewLog(prevLog => [
        ...prevLog,
        {
          question: currentQuestionObject?.question || "Unknown Question",
          guidanceLink: currentQuestionObject?.guidanceLink,
          videoUri: videoDataUri,
          transcribedAnswer: currentTranscribedAnswer, 
          evaluation: null,
          videoAnalysis: currentVideoAnalysis,
        }
      ]);
    }
  }, [generatedQuestions, currentQuestionIndex, parsedResumeString, handleError, toast, currentTranscribedAnswer, currentVideoAnalysis]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < generatedQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentRecordedVideoUri(null);
      setCurrentTranscribedAnswer(null);
      setCurrentEvaluation(null);
      setCurrentVideoAnalysis(null);
      setStage('INTERVIEWING');
    } else {
      setStage('INTERVIEW_COMPLETE');
    }
  };

  const handleSpeakQuestion = () => {
    const currentQuestionText = generatedQuestions[currentQuestionIndex]?.question;
    if (!speechSynthesisSupported || !currentQuestionText) return;
    try {
      const utterance = new SpeechSynthesisUtterance(currentQuestionText);
      speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Error with speech synthesis:", error);
      toast({ title: "Speech Error", description: "Could not read the question aloud.", variant: "destructive" });
    }
  };

  const handleRestart = () => {
    setStage('INITIAL');
    setParsedResumeData(null);
    setParsedResumeString('');
    setGeneratedQuestions([]);
    setCurrentQuestionIndex(0);
    setNumberOfQuestions(3);
    setCurrentRecordedVideoUri(null);
    setCurrentTranscribedAnswer(null);
    setCurrentEvaluation(null);
    setCurrentVideoAnalysis(null);
    setInterviewLog([]);
    setIsLoading(false);
    setLoadingMessage('');
    setErrorMessage(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingIndicator message={loadingMessage} />;
    }
    if (stage === 'ERROR_STATE' && errorMessage) {
      return <InterviewErrorCard errorMessage={errorMessage} handleRestart={handleRestart} />;
    }

    switch (stage) {
      case 'INITIAL':
        return <ResumeUploader onFileUpload={handleResumeUpload} isLoading={isLoading} />;
      
      case 'AWAITING_NUM_QUESTIONS':
        return (
          <InterviewAwaitingNumQuestions
            parsedResumeData={parsedResumeData}
            numberOfQuestions={numberOfQuestions}
            setNumberOfQuestions={setNumberOfQuestions}
            handleGenerateQuestions={handleGenerateQuestions}
            isLoading={isLoading}
          />
        );

      case 'QUESTIONS_READY':
        return (
          <InterviewQuestionsReady
            generatedQuestions={generatedQuestions}
            handleStartInterview={handleStartInterview}
          />
        );

      case 'INTERVIEWING':
        const currentQuestionObject = generatedQuestions[currentQuestionIndex];
        if (!currentQuestionObject) return <LoadingIndicator message="Loading question..." />;
        return (
          <InterviewingCard
            currentQuestionObject={currentQuestionObject}
            currentQuestionIndex={currentQuestionIndex}
            generatedQuestions={generatedQuestions}
            speechSynthesisSupported={speechSynthesisSupported}
            handleSpeakQuestion={handleSpeakQuestion}
            handleVideoSubmission={handleVideoSubmission}
            isLoading={isLoading}
          />
        );

      case 'QUESTION_EVALUATED':
        return (
          <InterviewQuestionEvaluated
            questionText={generatedQuestions[currentQuestionIndex]?.question}
            transcribedText={currentTranscribedAnswer}
            evaluation={currentEvaluation?.evaluation ?? null}
            score={currentEvaluation?.score ?? null}
            followUpQuestion={currentEvaluation?.followUpQuestion ?? null}
            expectedAnswerElements={currentEvaluation?.expectedAnswerElements ?? null}
            suggestedResources={currentEvaluation?.suggestedResources ?? null}
            videoAnalysis={currentVideoAnalysis}
            handleNextQuestion={handleNextQuestion}
            isLastQuestion={currentQuestionIndex >= generatedQuestions.length - 1}
          />
        );
      
      case 'INTERVIEW_COMPLETE':
        return (
          <InterviewComplete
            interviewLog={interviewLog}
            handleRestart={handleRestart}
          />
        );
        
      default: // Includes RESUME_PARSING, GENERATING_QUESTIONS, PROCESSING_ANSWER
        return <LoadingIndicator message={loadingMessage || "Loading..."} />;
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-black text-white font-satoshi overflow-x-hidden">
      {/* Animated background particles (copied from landing) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-10 left-20 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-32 w-1 h-1 bg-green-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 right-10 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-1000"></div>
        {/* Subtle background shape */}
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute inset-0">
          <ellipse cx="720" cy="160" rx="700" ry="120" fill="#22c55e" fillOpacity="0.04" />
        </svg>
      </div>
      {/* Header */}
      <div className="text-center py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight text-green-400 leading-tight w-full">
          Intervisage AI Interview
        </h1>
        <p className="text-lg text-white/70 max-w-2xl mx-auto font-medium">
          Practice real interview questions, get instant feedback, and level up your career with your personal AI coach.
        </p>
      </div>
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 flex items-center justify-center">
        <div className="w-full">
          {/* All content is wrapped in a glassy card for consistency */}
          <div className="glass max-w-3xl mx-auto p-6 md:p-10 rounded-2xl border border-green-500/20 shadow-2xl card-transition">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
} 