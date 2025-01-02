const CardGrid = ({ 
  children,
  columns = {
    default: 1,
    sm: 2,
    md: 3,
    lg: 4
  },
  gap = 6,
  className = ''
}) => {
  const getGridCols = () => {
    return Object.entries(columns)
      .map(([breakpoint, cols]) => {
        if (breakpoint === 'default') {
          return `grid-cols-${cols}`;
        }
        return `${breakpoint}:grid-cols-${cols}`;
      })
      .join(' ');
  };

  return (
    <div className={`
      grid 
      ${getGridCols()} 
      gap-${gap}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default CardGrid; 