const Timeline = ({ items, align = 'left', connected = true }) => {
  return (
    <div className="relative">
      {connected && (
        <div
          className={`absolute top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700
            ${align === 'left' ? 'left-6' : align === 'right' ? 'right-6' : 'left-1/2'}
          `}
        />
      )}

      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            align={align}
            isLast={index === items.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ item, align, isLast }) => {
  const getAlignmentClasses = () => {
    switch (align) {
      case 'left':
        return 'left-0 ml-12';
      case 'right':
        return 'right-0 mr-12 flex-row-reverse';
      case 'center':
        return index % 2 === 0 
          ? 'left-1/2 ml-6' 
          : 'right-1/2 mr-6 flex-row-reverse';
      default:
        return 'left-0 ml-12';
    }
  };

  const getIconColor = () => {
    switch (item.type) {
      case 'success':
        return 'bg-green-500 dark:bg-green-400';
      case 'error':
        return 'bg-red-500 dark:bg-red-400';
      case 'warning':
        return 'bg-yellow-500 dark:bg-yellow-400';
      case 'info':
        return 'bg-blue-500 dark:bg-blue-400';
      default:
        return 'bg-gray-500 dark:bg-gray-400';
    }
  };

  return (
    <div className={`relative flex ${getAlignmentClasses()}`}>
      {/* Icon/Dot */}
      <div className={`
        absolute flex items-center justify-center w-12 h-12
        ${align === 'left' ? '-left-6' : align === 'right' ? '-right-6' : 'left-1/2 -translate-x-1/2'}
      `}>
        {item.icon ? (
          <div className={`
            p-2 rounded-full ring-8 ring-white dark:ring-gray-900
            ${getIconColor()}
          `}>
            {item.icon}
          </div>
        ) : (
          <div className={`
            w-4 h-4 rounded-full ring-4 ring-white dark:ring-gray-900
            ${getIconColor()}
          `} />
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          {item.title && (
            <h3 className="font-medium text-lg text-gray-900 dark:text-white mb-1">
              {item.title}
            </h3>
          )}
          
          {item.subtitle && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              {item.subtitle}
            </p>
          )}
          
          {item.content && (
            <div className="text-gray-700 dark:text-gray-300">
              {item.content}
            </div>
          )}

          {item.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {item.footer && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {item.footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Example usage component
const TimelineExample = () => {
  const timelineItems = [
    {
      type: 'success',
      title: 'Project Launched',
      subtitle: 'January 15, 2024',
      content: 'Successfully launched the new product feature to production.',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
      tags: ['Release', 'Milestone'],
      footer: (
        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <span>Team: Frontend</span>
          <span>•</span>
          <span>Duration: 2 weeks</span>
        </div>
      )
    },
    {
      type: 'info',
      title: 'Design Review',
      subtitle: 'January 10, 2024',
      content: 'Completed the design review with stakeholders.',
      tags: ['Design', 'Review']
    },
    {
      type: 'warning',
      title: 'Performance Testing',
      subtitle: 'January 5, 2024',
      content: 'Identified potential performance bottlenecks during testing.',
      tags: ['Testing', 'Performance']
    }
  ];

  return (
    <div className="max-w-3xl mx-auto p-4">
      <Timeline items={timelineItems} align="left" connected={true} />
    </div>
  );
};

export default Timeline; 