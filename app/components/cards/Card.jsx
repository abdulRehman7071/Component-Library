const Card = ({
  title,
  subtitle,
  content,
  image,
  footer,
  actions,
  className = '',
  hover = true,
  padding = true
}) => {
  return (
    <div
      className={`
        bg-white dark:bg-gray-800
        rounded-lg
        border border-gray-200 dark:border-gray-700
        ${hover ? 'hover:shadow-lg transition-shadow duration-200' : ''}
        ${padding ? 'p-6' : ''}
        ${className}
      `}
    >
      {image && (
        <div className={`${padding ? '-mx-6 -mt-6' : ''} mb-6`}>
          <img
            src={image}
            alt={title || 'Card image'}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </div>
      )}

      {title && (
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
      )}

      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          {subtitle}
        </p>
      )}

      {content && (
        <div className="text-gray-700 dark:text-gray-300">
          {content}
        </div>
      )}

      {actions && (
        <div className={`
          ${padding ? '-mx-6 -mb-6 mt-6' : 'mt-6'}
          px-6 py-3
          bg-gray-50 dark:bg-gray-700/50
          rounded-b-lg
          flex
          justify-end
          space-x-3
        `}>
          {actions}
        </div>
      )}

      {footer && !actions && (
        <div className={`${content ? 'mt-6' : ''}`}>
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card; 