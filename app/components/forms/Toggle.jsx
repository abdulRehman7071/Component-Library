const Toggle = ({ 
  enabled,
  onChange,
  size = 'md',
  label,
  disabled = false,
  color = 'blue',
  name,
  required = false,
  description,
  error
}) => {
  const sizes = {
    sm: 'w-8 h-4',
    md: 'w-11 h-6',
    lg: 'w-14 h-7'
  };

  const toggleSizes = {
    sm: 'h-3 w-3',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const colors = {
    blue: 'bg-blue-600 dark:bg-blue-500',
    green: 'bg-green-600 dark:bg-green-500',
    red: 'bg-red-600 dark:bg-red-500',
    purple: 'bg-purple-600 dark:bg-purple-500',
    yellow: 'bg-yellow-600 dark:bg-yellow-500'
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        {/* Toggle Switch */}
        <label className="inline-flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={enabled}
              disabled={disabled}
              onChange={(e) => onChange(e.target.checked)}
              name={name}
              required={required}
              aria-describedby={`${name}-description`}
              aria-invalid={error ? 'true' : 'false'}
            />
            <div
              className={`
                ${sizes[size]}
                ${enabled ? colors[color] : 'bg-gray-200 dark:bg-gray-700'}
                rounded-full
                peer 
                peer-focus:outline-none 
                peer-focus:ring-4 
                peer-focus:ring-${color}-300
                dark:peer-focus:ring-${color}-800
                transition-colors
                duration-200
                ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                ${error ? 'ring-2 ring-red-500' : ''}
              `}
            >
              <div
                className={`
                  ${toggleSizes[size]}
                  ${enabled ? 'translate-x-full' : 'translate-x-0'}
                  bg-white
                  rounded-full
                  shadow-lg
                  transform
                  transition-transform
                  duration-200
                `}
              />
            </div>
          </div>
          {/* Label */}
          {label && (
            <span 
              className={`
                ml-3 
                text-sm 
                font-medium 
                ${disabled 
                  ? 'text-gray-400 dark:text-gray-600' 
                  : 'text-gray-900 dark:text-gray-100'
                }
              `}
            >
              {label}
              {required && <span className="text-red-500 ml-1">*</span>}
            </span>
          )}
        </label>
      </div>

      {/* Description */}
      {description && (
        <p 
          id={`${name}-description`}
          className="mt-1 text-sm text-gray-500 dark:text-gray-400"
        >
          {description}
        </p>
      )}

      {/* Error Message */}
      {error && (
        <p className="mt-1 text-sm text-red-600 dark:text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

export default Toggle; 