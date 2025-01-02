const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  rounded = false,
  dot = false,
  removable = false,
  onRemove
}) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    info: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'
  };

  const sizes = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-0.5',
    lg: 'text-base px-3 py-1'
  };

  return (
    <span className={`
      inline-flex items-center font-medium
      ${variants[variant]}
      ${sizes[size]}
      ${rounded ? 'rounded-full' : 'rounded'}
    `}>
      {dot && (
        <span className={`
          w-1.5 h-1.5 mr-1.5 rounded-full
          ${variant === 'primary' ? 'bg-blue-500' :
            variant === 'secondary' ? 'bg-gray-500' :
            variant === 'success' ? 'bg-green-500' :
            variant === 'danger' ? 'bg-red-500' :
            variant === 'warning' ? 'bg-yellow-500' :
            'bg-indigo-500'}
        `}/>
      )}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className={`
            inline-flex items-center justify-center ml-1.5 -mr-1
            hover:bg-opacity-20 hover:bg-black rounded-full
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent
            ${variant === 'primary' ? 'focus:ring-blue-400' :
              variant === 'secondary' ? 'focus:ring-gray-400' :
              variant === 'success' ? 'focus:ring-green-400' :
              variant === 'danger' ? 'focus:ring-red-400' :
              variant === 'warning' ? 'focus:ring-yellow-400' :
              'focus:ring-indigo-400'}
          `}
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Badge; 