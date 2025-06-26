import { UploadCloud } from 'lucide-react';

export function ResumeUploaderHeader() {
  return (
    <div className="space-y-3 text-center">
      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-br from-green-400/60 to-green-600/60 p-1 shadow-lg shadow-green-500/30 animate-pulse">
          <div className="bg-black rounded-full p-4 flex items-center justify-center">
            <UploadCloud className="h-12 w-12 text-green-400 drop-shadow-lg" />
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-extrabold text-green-400 tracking-tight drop-shadow-lg">Upload Your Resume</h2>
      <p className="text-green-300/80 text-base font-medium">
        Upload your resume <span className="text-green-400 font-semibold">(PDF or DOCX)</span> to get started.
      </p>
    </div>
  );
} 