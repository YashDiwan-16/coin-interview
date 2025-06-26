import { Button } from '@/components/ui/button';

interface ResumeUploaderButtonProps {
  isLoading: boolean;
  selectedFile: File | null;
  handleSubmit: () => void;
}

export function ResumeUploaderButton({ isLoading, selectedFile, handleSubmit }: ResumeUploaderButtonProps) {
  return (
    <Button
      onClick={handleSubmit}
      disabled={isLoading || !selectedFile}
      className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
    >
      {isLoading ? 'Processing...' : 'Upload and Analyze Resume'}
    </Button>
  );
} 