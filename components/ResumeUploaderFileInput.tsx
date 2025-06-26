import type { ChangeEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FileText } from 'lucide-react';

interface ResumeUploaderFileInputProps {
  selectedFile: File | null;
  isLoading: boolean;
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ResumeUploaderFileInput({ selectedFile, isLoading, handleFileChange }: ResumeUploaderFileInputProps) {
  return (
    <div className="space-y-3">
      <Label htmlFor="resume-file" className="sr-only">Resume File</Label>
      <Input
        id="resume-file"
        type="file"
        accept=".pdf,.docx"
        onChange={handleFileChange}
        disabled={isLoading}
        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
      />
      {selectedFile && (
        <div className="flex items-center space-x-2 text-sm text-muted-foreground p-2 border rounded-md">
          <FileText className="h-5 w-5 text-primary" />
          <span>{selectedFile.name} ({(selectedFile.size / 1024).toFixed(1)} KB)</span>
        </div>
      )}
    </div>
  );
} 