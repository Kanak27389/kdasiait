import React, { useRef, useState } from 'react';

export interface UploadedFileMeta {
  file: File;
  previewUrl: string;
  name: string;
  size: string;
  isPdf: boolean;
}

interface FileUploadFieldProps {
  id: string;
  label: string;
  sublabel?: string;
  required?: boolean;
  accept: string;
  icon: string;
  isPhoto?: boolean;
  value: UploadedFileMeta | null;
  onChange: (fileMeta: UploadedFileMeta | null) => void;
  helperText?: string;
}

export const FileUploadField: React.FC<FileUploadFieldProps> = ({
  id,
  label,
  sublabel,
  required = false,
  accept,
  icon,
  isPhoto = false,
  value,
  onChange,
  helperText
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const processFile = (file: File) => {
    setUploadError(null);

    // Validate size (limit to 10MB)
    const maxBytes = 10 * 1024 * 1024;
    if (file.size > maxBytes) {
      setUploadError('File size exceeds 10MB limit. Please upload a smaller file.');
      return;
    }

    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

    if (isPhoto && isPdf) {
      setUploadError('Please upload an image file (JPG, PNG, or WebP) for the candidate photograph.');
      return;
    }

    // Read as Data URL for preview and storing in local session
    const reader = new FileReader();
    reader.onload = () => {
      const previewUrl = reader.result as string;
      onChange({
        file,
        previewUrl,
        name: file.name,
        size: formatFileSize(file.size),
        isPdf
      });
    };
    reader.onerror = () => {
      setUploadError('Failed to read file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setUploadError(null);
    onChange(null);
  };

  const handleTriggerClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div id={`${id}-container`} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="font-label-sm text-[#191b23] text-xs font-semibold flex items-center gap-1.5">
          <span className="material-symbols-outlined text-[#7d2628] text-[16px]">{icon}</span>
          <span>{label}</span>
          {required && <span className="text-[#ba1a1a] font-bold">*</span>}
        </label>
        {value && (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#DEF7EC] text-[#03543F] font-label-sm text-[10px] font-bold">
            <span className="material-symbols-outlined text-[12px]">check_circle</span>
            <span>Attached</span>
          </span>
        )}
      </div>

      {sublabel && (
        <span className="text-[11px] text-[#535E6B] leading-tight">
          {sublabel}
        </span>
      )}

      {/* Hidden native input */}
      <input
        ref={fileInputRef}
        id={id}
        type="file"
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Upload Box or Attached Preview Card */}
      {!value ? (
        <div
          id={`${id}-dropzone`}
          onClick={handleTriggerClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`group cursor-pointer rounded-xl border-2 border-dashed p-3.5 sm:p-4 text-center transition-all flex flex-col items-center justify-center gap-2 ${
            isDragging
              ? 'border-[#7d2628] bg-[#FDF7F7] scale-[0.99]'
              : 'border-[#c2c5dd] bg-[#faf8ff] hover:bg-[#f2f3fe] hover:border-[#7d2628]'
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-white text-[#7d2628] border border-[#ededf8] flex items-center justify-center group-hover:scale-110 transition-transform shadow-xs">
            <span className="material-symbols-outlined text-[20px]">{icon}</span>
          </div>

          <div className="flex flex-col items-center">
            <p className="font-label-md text-xs text-[#191b23] font-bold">
              <span className="text-[#7d2628] underline underline-offset-2">Click to upload</span> or drag and drop
            </p>
            <p className="text-[10px] text-[#535E6B] mt-0.5">
              {helperText || (isPhoto ? 'JPG, PNG, WebP (Max 5MB)' : 'PDF, JPG, PNG (Max 10MB)')}
            </p>
          </div>
        </div>
      ) : (
        <div
          id={`${id}-preview-card`}
          className="rounded-xl border border-[#ededf8] bg-white p-3 shadow-xs flex items-center gap-3 transition-all hover:border-[#bcceff]"
        >
          {/* Thumbnail / Icon representation */}
          <div className="relative shrink-0">
            {isPhoto && value.previewUrl ? (
              <img
                src={value.previewUrl}
                alt="Candidate Preview"
                className="w-14 h-16 rounded-lg object-cover border border-[#ededf8] shadow-xs"
              />
            ) : !value.isPdf && value.previewUrl ? (
              <img
                src={value.previewUrl}
                alt="Doc Preview"
                className="w-14 h-14 rounded-lg object-cover border border-[#ededf8] shadow-xs"
              />
            ) : (
              <div className="w-14 h-14 rounded-lg bg-[#EFF4FF] border border-[#bcceff] text-[#00163D] flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-[24px]">
                  {value.isPdf ? 'picture_as_pdf' : 'description'}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-[#00163D]">
                  {value.isPdf ? 'PDF' : 'DOC'}
                </span>
              </div>
            )}
          </div>

          {/* File Information */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h4 className="font-label-md text-xs font-bold text-[#191b23] truncate">
                {value.name}
              </h4>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-mono text-[11px] text-[#535E6B]">
                {value.size}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#535E6B]" />
              <span className="text-[10px] font-medium text-[#03543F]">
                Ready for submission
              </span>
            </div>
          </div>

          {/* Actions: Replace / Remove */}
          <div className="flex items-center gap-1 shrink-0">
            <button
              type="button"
              id={`${id}-change-btn`}
              onClick={handleTriggerClick}
              title="Replace file"
              className="p-1.5 rounded-lg text-[#535E6B] hover:text-[#00163D] hover:bg-[#f2f3fe] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">cached</span>
            </button>
            <button
              type="button"
              id={`${id}-remove-btn`}
              onClick={handleRemove}
              title="Remove file"
              className="p-1.5 rounded-lg text-[#ba1a1a] hover:bg-[#FDF7F7] transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">delete</span>
            </button>
          </div>
        </div>
      )}

      {uploadError && (
        <span className="text-[11px] text-[#ba1a1a] font-medium flex items-center gap-1 mt-0.5">
          <span className="material-symbols-outlined text-[14px]">error</span>
          {uploadError}
        </span>
      )}
    </div>
  );
};
