import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'icon';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const baseClasses = "px-4 py-2 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 transition-colors duration-200";
  
  const variantClasses = {
    primary: "text-white bg-blue-500 hover:bg-blue-700 focus:ring-blue-400 focus:ring-opacity-75 dark:bg-blue-600 dark:hover:bg-blue-800",
    secondary: "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-gray-400 focus:ring-opacity-75 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700",
    icon: "inline-flex items-center text-white bg-green-500 hover:bg-green-700 focus:ring-green-400 focus:ring-opacity-75 dark:bg-green-600 dark:hover:bg-green-800"
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (variant === 'icon') {
    return (
      <button className={classes} onClick={onClick}>
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
        </svg>
        {children}
      </button>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 