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
      className="w-full bg-green-500 hover:bg-green-400 text-black font-bold border-2 border-green-500 rounded-full py-3 text-lg shadow-green-500/30 shadow-md transition-all duration-200 hover:shadow-green-400/40"
    >
      {isLoading ? 'Processing...' : 'Upload and Analyze Resume'}
    </Button>
  );
} 