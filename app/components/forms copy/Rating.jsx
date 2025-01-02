import { useState } from 'react';

const Rating = ({
  total = 5,
  value = 0,
  onChange,
  size = 'md',
  readonly = false,
  showValue = false
}) => {
  const [hoverValue, setHoverValue] = useState(0);

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center space-x-1">
      {[...Array(total)].map((_, index) => {
        const starValue = index + 1;
        const filled = hoverValue || value;
        
        return (
          <button
            key={index}
            type="button"
            disabled={readonly}
            className={`focus:outline-none ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={() => onChange?.(starValue)}
            onMouseEnter={() => !readonly && setHoverValue(starValue)}
            onMouseLeave={() => !readonly && setHoverValue(0)}
          >
            <svg
              className={`${sizes[size]} ${
                starValue <= filled
                  ? 'text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
      
      {showValue && (
        <span className="ml-2 text-gray-600 dark:text-gray-400">
          {value} out of {total}
        </span>
      )}
    </div>
  );
};

export default Rating; 