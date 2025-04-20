import React, { useState } from 'react';

const Calendar = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleDayClick = () => {
    setIsFlipped(true);
  };

  const handleButtonClick = () => {
    setIsFlipped(false);
  };

  return (
    <div className="
      translate-x-[680px] translate-y-[-1000px] 
      container max-w-[500px] w-full mx-auto flex items-center justify-center h-screen">
      
      <div className={`
        h-[550px] w-[400px] relative bg-[#1e1b2e] rounded-md
        shadow-[0_0_25px_rgba(168,85,247,0.4)] transition-transform duration-900
        [perspective:1000px] [transform-style:preserve-3d]
        ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        
        {/* Front - Calendar View */}
        <div className="front absolute w-full h-full [backface-visibility:hidden]">
          <div className="current-date flex justify-between border-b border-white/10 p-[30px_40px]">
            <h1 className="text-slate-200 text-[1.4em] font-light">April 15th</h1>
            <h1 className="text-slate-200 text-[1.4em] font-light">April 2025</h1>
          </div>

          <div className="current-month">
            <ul className="week-days flex justify-between text-slate-300 font-semibold p-[30px_40px]">
              {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map(day => (
                <li key={day}>{day}</li>
              ))}
            </ul>

            <div className="weeks flex flex-col text-white p-[0_40px]">
              <div className="first flex justify-between mb-5 text-[1.2em] font-light">
                {['28', '29', '30', '31'].map(day => (
                  <span key={day} className="opacity-30 p-[10px]">{day}</span>
                ))}
                {['01', '02', '03'].map(day => (
                  <span key={day} className="p-[10px] cursor-pointer" onClick={handleDayClick}>{day}</span>
                ))}
              </div>
              <div className="second flex justify-between mb-5 text-[1.2em] font-light">
                {['04', '05'].map(day => (
                  <span key={day} className="p-[10px] cursor-pointer" onClick={handleDayClick}>{day}</span>
                ))}
                <span className="relative p-[10px] cursor-pointer" onClick={handleDayClick}>
                  06
                  <span className="absolute text-purple-400 text-[1.4em] right-[-4px] top-[-4px]">•</span>
                </span>
                {['07', '08', '09', '10'].map(day => (
                  <span key={day} className="p-[10px] cursor-pointer" onClick={handleDayClick}>{day}</span>
                ))}
              </div>
              <div className="third flex justify-between mb-5 text-[1.2em] font-light">
                {['11', '12', '13', '14'].map(day => (
                  <span key={day} className="p-[10px] cursor-pointer" onClick={handleDayClick}>{day}</span>
                ))}
                <span className="p-[10px] bg-purple-600 text-white rounded-full shadow-[0_0_12px_rgba(168,85,247,0.7)] cursor-pointer" onClick={handleDayClick}>15</span>
                <span className="p-[10px] cursor-pointer" onClick={handleDayClick}>16</span>
                <span className="p-[10px] cursor-pointer" onClick={handleDayClick}>17</span>
              </div>
              <div className="fourth flex justify-between mb-5 text-[1.2em] font-light">
                {['18', '19', '20', '21', '22', '23', '24'].map(day => (
                  <span key={day} className="p-[10px] cursor-pointer" onClick={handleDayClick}>{day}</span>
                ))}
              </div>
              <div className="fifth flex justify-between text-[1.2em] font-light">
                {['25', '26', '27', '28', '29', '30', '31'].map(day => (
                  <span key={day} className="p-[10px] cursor-pointer" onClick={handleDayClick}>{day}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Back - Event Form View */}
        <div className="back absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <input
            className="w-full bg-transparent border-0 border-b border-white/10 text-slate-200 text-[1.4em] font-light p-[30px_40px] focus:outline-none"
            placeholder="What's the event?"
          />
          <div className="info flex flex-col text-slate-300 font-semibold text-[1.2em] p-[30px_40px]">
            <div className="flex justify-between mb-10">
              <p className="w-4">Date: <span className="font-light text-slate-400">Jan 15th, 2016</span></p>
              <p className="w-1/2">Time: <span className="font-light text-slate-400">6:35 PM</span></p>
            </div>
            <div className="address mb-10">
              <p>Address: <span className="font-light text-slate-400">129 W 81st St, New York, NY</span></p>
            </div>
            <div className="observations">
              <p>Observations: <span className="font-light text-slate-400">Be there 15 minutes earlier</span></p>
            </div>
          </div>
          <div className="actions absolute bottom-0 w-full flex border-t border-white/10">
            <button
              className="w-1/2 bg-purple-700 text-white font-semibold uppercase tracking-[3px] p-[30px_0] shadow-[0_0_10px_rgba(168,85,247,0.7)] active:bg-purple-800"
              onClick={handleButtonClick}
            >
              Save
            </button>
            <button
              className="w-1/2 bg-purple-700 text-white font-semibold uppercase tracking-[3px] p-[30px_0] shadow-[0_0_10px_rgba(168,85,247,0.7)] active:bg-purple-800"
              onClick={handleButtonClick}
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
