const Skeleton = ({ 
  variant = 'text',
  width,
  height,
  count = 1,
  className = '',
  animate = true,
  rounded = true
}) => {
  const getSkeletonStyle = () => {
    switch (variant) {
      case 'circle':
        return 'rounded-full';
      case 'rectangle':
        return rounded ? 'rounded-md' : '';
      case 'text':
      default:
        return 'rounded w-full h-4';
    }
  };

  const baseStyle = `
    ${animate ? 'animate-pulse' : ''}
    bg-gray-200 dark:bg-gray-700
    ${getSkeletonStyle()}
  `;

  const renderSkeleton = (index) => (
    <div
      key={index}
      className={`${baseStyle} ${className}`}
      style={{
        width: width,
        height: variant === 'text' ? height || '1rem' : height,
      }}
      role="status"
      aria-label="Loading..."
    />
  );

  // For text variant with multiple lines
  const renderTextSkeleton = () => {
    if (variant !== 'text' || count === 1) {
      return renderSkeleton(0);
    }

    return (
      <div className="space-y-3">
        {Array.from({ length: count }, (_, index) => (
          <div
            key={index}
            className={`${baseStyle} ${className}`}
            style={{
              width: index === count - 1 ? '80%' : width,
              height: height || '1rem',
            }}
          />
        ))}
      </div>
    );
  };

  // Render content skeleton
  const renderContentSkeleton = () => {
    if (variant === 'text') {
      return renderTextSkeleton();
    }

    return (
      <div className="space-y-3">
        {Array.from({ length: count }, (_, index) => renderSkeleton(index))}
      </div>
    );
  };

  return (
    <div className="animate-pulse-container">
      {renderContentSkeleton()}
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Skeleton; 