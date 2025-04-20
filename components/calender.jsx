import React from 'react';
import 'D:/habeba/habeba/new work of DOM/dashbor--/src/styles/index.css';

const days = [
  { day: 'Sun', date: '11' },
  { day: 'Mon', date: '12' },
  { day: 'Tue', date: '13' },
  { day: 'Wed', date: '14', active: true },
  { day: 'Thu', date: '15' },
  { day: 'Fri', date: '16' },
  { day: 'Sat', date: '17' },
];

const DaySelector = () => {
  return (
    <div className="h-screen p-6 space-y-12">
      <div className="flex bg-[#1a1530] justify-start md:justify-center rounded-[10px] overflow-x-scroll mx-auto py-4 px-2 md:mx-12 translate-y-[-189px] translate-x-[-60px] w-299 scrollbar-hide shadow-md shadow-purple-500/20">
        {days.map(({ day, date, active }) => (
          <div
            key={day}
            className={`flex group ${
              active
                ? 'bg-[#8b5cf6] shadow-xl ring-2 ring-purple-400' // Active day color
                : 'hover:bg-[#312e81] hover:shadow-lg hover:shadow-purple-600/30 transition-all duration-300'
            } rounded-lg mx-1 cursor-pointer justify-center relative w-16`}
          >
            {active && (
              <span className="flex h-3 w-3 absolute -top-1 -right-1">
                <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-300"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-100"></span>
              </span>
            )}
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p
                  className={`text-sm ${
                    active
                      ? 'text-white'
                      : 'text-gray-300 group-hover:text-white transition-all duration-300'
                  }`}
                >
                  {day}
                </p>
                <p
                  className={`mt-3 ${
                    active
                      ? 'text-white font-semibold'
                      : 'text-gray-300 group-hover:text-white group-hover:font-semibold transition-all duration-300'
                  }`}
                >
                  {date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;
