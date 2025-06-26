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
        className="w-full bg-black border-2 border-green-500 text-green-400 focus:ring-2 focus:ring-green-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-500/10 file:text-green-400 hover:file:bg-green-500/20 shadow-md"
      />
      {selectedFile && (
        <div className="flex items-center space-x-2 text-sm bg-green-500/10 border border-green-500 text-green-300 p-3 rounded-lg shadow-inner mt-2">
          <FileText className="h-5 w-5 text-green-400" />
          <span className="text-white font-medium">{selectedFile.name} <span className="text-green-400">({(selectedFile.size / 1024).toFixed(1)} KB)</span></span>
        </div>
      )}
    </div>
  );
} 