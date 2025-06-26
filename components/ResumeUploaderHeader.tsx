import { UploadCloud } from 'lucide-react';

export function ResumeUploaderHeader() {
  return (
    <div className="space-y-2 text-center">
      <UploadCloud className="mx-auto h-12 w-12 text-primary" />
      <h2 className="text-2xl font-semibold">Upload Your Resume</h2>
      <p className="text-muted-foreground">
        Upload your resume (PDF or DOCX) to get started.
      </p>
    </div>
  );
} 