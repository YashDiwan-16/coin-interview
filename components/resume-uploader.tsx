"use client";

import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { ResumeUploaderHeader } from './ResumeUploaderHeader';
import { ResumeUploaderFileInput } from './ResumeUploaderFileInput';
import { ResumeUploaderButton } from './ResumeUploaderButton';

interface ResumeUploaderProps {
  onFileUpload: (file: File) => void;
  isLoading: boolean;
}

export function ResumeUploader({ onFileUpload, isLoading }: ResumeUploaderProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setSelectedFile(file);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please upload a PDF or DOCX file.",
          variant: "destructive",
        });
        setSelectedFile(null);
        event.target.value = ""; // Reset file input
      }
    }
  };

  const handleSubmit = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    } else {
      toast({
        title: "No File Selected",
        description: "Please select your resume to upload.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-2 bg-black border border-green-500/40 rounded-xl shadow-lg">
      <ResumeUploaderHeader />
      <ResumeUploaderFileInput selectedFile={selectedFile} isLoading={isLoading} handleFileChange={handleFileChange} />
      <ResumeUploaderButton isLoading={isLoading} selectedFile={selectedFile} handleSubmit={handleSubmit} />
    </div>
  );
}
