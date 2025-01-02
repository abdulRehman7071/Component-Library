const Breadcrumbs = ({ items, separator = "/" }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        {items.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            {index !== 0 && (
              <span className="mx-2.5 text-gray-400 dark:text-gray-600">
                {separator}
              </span>
            )}
            {index !== items.length - 1 ? (
              <a
                href={item.href}
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {item.icon && (
                  <span className="mr-2">{item.icon}</span>
                )}
                {item.label}
              </a>
            ) : (
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {item.icon && (
                  <span className="mr-2">{item.icon}</span>
                )}
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs; 