import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { AlertTriangle, RotateCcw } from 'lucide-react';

interface InterviewErrorCardProps {
  errorMessage: string;
  handleRestart: () => void;
}

export function InterviewErrorCard({ errorMessage, handleRestart }: InterviewErrorCardProps) {
  return (
    <Card className="w-full max-w-lg mx-auto text-center bg-black border border-green-500/40 shadow-lg">
      <CardHeader>
        <CardTitle className="text-green-400">Error</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert variant="destructive" className="bg-black border border-green-500/40 text-green-400">
          <AlertTriangle className="h-4 w-4 text-green-400" />
          <AlertTitle className="text-green-400">An Error Occurred</AlertTitle>
          <AlertDescription className="text-white/80">{errorMessage}</AlertDescription>
        </Alert>
        <Button onClick={handleRestart} variant="outline" className="mt-6 border-green-500 text-green-400 hover:bg-green-500/10">
          <RotateCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
      </CardContent>
    </Card>
  );
} 