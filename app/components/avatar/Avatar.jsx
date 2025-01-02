const Avatar = ({
  src,
  alt,
  size = 'md',
  status,
  online,
  initials,
  shape = 'circle',
  className = ''
}) => {
  const sizes = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-14 h-14 text-xl'
  };

  const shapes = {
    circle: 'rounded-full',
    square: 'rounded-lg'
  };

  const statusColors = {
    online: 'bg-green-500',
    away: 'bg-yellow-500',
    busy: 'bg-red-500',
    offline: 'bg-gray-500'
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizes[size]}
            ${shapes[shape]}
            object-cover
            ${className}
          `}
        />
      ) : (
        <div
          className={`
            ${sizes[size]}
            ${shapes[shape]}
            bg-gray-200
            dark:bg-gray-700
            flex
            items-center
            justify-center
            text-gray-600
            dark:text-gray-300
            font-medium
            ${className}
          `}
        >
          {initials ? getInitials(initials) : ''}
        </div>
      )}
      
      {status && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            block
            h-2.5
            w-2.5
            rounded-full
            ring-2
            ring-white
            dark:ring-gray-800
            ${statusColors[status]}
          `}
        />
      )}

      {online !== undefined && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            block
            h-2.5
            w-2.5
            rounded-full
            ring-2
            ring-white
            dark:ring-gray-800
            ${online ? 'bg-green-500' : 'bg-gray-500'}
          `}
        />
      )}
    </div>
  );
};

export default Avatar; 