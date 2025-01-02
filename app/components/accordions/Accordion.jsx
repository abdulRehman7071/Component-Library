import { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="flex w-full justify-between items-center py-4 px-5 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-gray-900 dark:text-white">{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="py-4 px-5 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300">{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default Accordion; 