const ProgressBar = ({ 
  progress, 
  size = 'md', 
  color = 'blue',
  showLabel = true,
  animated = true 
}) => {
  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-4',
    xl: 'h-6'
  };

  const colors = {
    blue: 'bg-blue-600 dark:bg-blue-500',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-500',
    purple: 'bg-purple-600 dark:bg-purple-500'
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Progress</span>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full dark:bg-gray-700 ${sizes[size]}`}>
        <div
          className={`${sizes[size]} rounded-full ${colors[color]} ${
            animated ? 'transition-all duration-500' : ''
          }`}
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </div>
  );
};

export default ProgressBar; 