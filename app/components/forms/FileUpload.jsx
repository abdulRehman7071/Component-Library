import { useState, useRef } from 'react';

const FileUpload = ({
  accept,
  multiple = false,
  maxSize = 5242880, // 5MB
  onUpload,
  onError,
  className = ''
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    handleFiles(selectedFiles);
  };

  const handleFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      if (file.size > maxSize) {
        onError?.(`File ${file.name} is too large`);
        return false;
      }
      if (accept && !accept.split(',').some(type => file.type.match(type.trim()))) {
        onError?.(`File ${file.name} is not an accepted file type`);
        return false;
      }
      return true;
    });

    if (multiple) {
      setFiles(prev => [...prev, ...validFiles]);
      onUpload?.([...files, ...validFiles]);
    } else {
      setFiles(validFiles.slice(0, 1));
      onUpload?.(validFiles[0]);
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onUpload?.(multiple ? newFiles : null);
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`
          relative
          flex
          flex-col
          items-center
          justify-center
          w-full
          min-h-[200px]
          border-2
          border-dashed
          rounded-lg
          cursor-pointer
          transition-colors
          ${isDragging 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600'
          }
          hover:bg-gray-50
          dark:hover:bg-gray-800/50
        `}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
        />

        <div className="flex flex-col items-center justify-center p-6 text-center">
          <svg
            className="w-12 h-12 mb-4 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {accept ? `Accepted files: ${accept}` : 'All files are accepted'} 
            {` (Max size: ${Math.round(maxSize / 1024 / 1024)}MB)`}
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <div className="mt-4">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {files.map((file, index) => (
              <li key={index} className="py-3 flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-200">
                    {file.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileUpload; 