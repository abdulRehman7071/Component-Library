const StatsCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  trend = 'neutral',
  description,
  className = ''
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up':
        return 'text-green-500 dark:text-green-400';
      case 'down':
        return 'text-red-500 dark:text-red-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      case 'down':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`
      bg-white dark:bg-gray-800 
      rounded-lg shadow-sm 
      border border-gray-200 dark:border-gray-700 
      p-6 
      ${className}
    `}>
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
            {title}
          </p>
          <div className="mt-2.5 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              {value}
            </p>
            {change && (
              <span className={`
                ml-2 flex items-center text-sm font-medium ${getTrendColor()}
              `}>
                {getTrendIcon()}
                <span className="ml-1">{change}</span>
              </span>
            )}
          </div>
          {description && (
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard; 