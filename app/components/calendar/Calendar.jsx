import { useState } from 'react';

const Calendar = ({ 
  selectedDate = new Date(),
  onDateSelect,
  minDate,
  maxDate 
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

  const daysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const startDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isDateDisabled = (date) => {
    if (minDate && date < new Date(minDate)) return true;
    if (maxDate && date > new Date(maxDate)) return true;
    return false;
  };

  const changeMonth = (offset) => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + offset)));
  };

  const days = [];
  const totalDays = daysInMonth(currentMonth);
  const startDay = startDayOfMonth(currentMonth);

  for (let i = 0; i < startDay; i++) {
    days.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i));
  }

  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => changeMonth(-1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button
          onClick={() => changeMonth(1)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}
        
        {days.map((date, index) => (
          <div key={index} className="aspect-square p-1">
            {date && (
              <button
                onClick={() => onDateSelect(date)}
                disabled={isDateDisabled(date)}
                className={`
                  w-full h-full flex items-center justify-center rounded-full
                  ${date.toDateString() === selectedDate.toDateString()
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'}
                  ${isDateDisabled(date)
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-900 dark:text-white'}
                `}
              >
                {date.getDate()}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar; 