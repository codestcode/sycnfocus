import React, { useState, useEffect, useRef } from "react";
import "D:/habeba/habeba/new work of DOM/dashbor--/src/styles/index.css";

const PomodoroApp = () => {
  const POMODORO = "Pomodoro";
  const SHORT_BREAK = "Shortbreak";
  const LONG_BREAK = "Longbreak";

  const pomodoroTime = 1500;
  const shortBreakTime = 300;
  const longBreakTime = 900;

  const [type, setType] = useState(POMODORO);
  const [timeLeft, setTimeLeft] = useState(pomodoroTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    resetTimer();
  }, [type]);

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    if (type === POMODORO) setTimeLeft(pomodoroTime);
    else if (type === SHORT_BREAK) setTimeLeft(shortBreakTime);
    else setTimeLeft(longBreakTime);
  };

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleTypeChange = (newType) => {
    setType(newType);
  };

  const progressAngle = () => {
    const max =
      type === POMODORO
        ? pomodoroTime
        : type === SHORT_BREAK
        ? shortBreakTime
        : longBreakTime;
    return (360 * timeLeft) / max;
  };

  return (

    <div className="p-5 w-120 absolute top-1/2 left-1/2 transform -translate-x-[-259px] translate-y-[30px]  bg-[#1e2939a6] shadow-lg shadow-black/20 rounded-2xl ">
      <h3 className="text-center text-white text-base mt-2 font-semibold">
        Pomodoro App
      </h3>

      <div className="flex justify-between mt-4">
        {[POMODORO, SHORT_BREAK, LONG_BREAK].map((btnType) => (
          <button
            key={btnType}
            onClick={() => handleTypeChange(btnType)}
            className={`h-10 w-[85px] text-white text-xs rounded-md flex items-center justify-center cursor-pointer ${
              type === btnType ? "bg-[#7d59c1]" : "bg-[#422f66]"
            }`}
          >
            {btnType}
          </button>
        ))}
      </div>

      <div
        className="h-[220px] w-[220px] rounded-full flex items-center justify-center mx-auto mt-6 animate-pulse"
        style={{
          background: `conic-gradient(#664efe ${progressAngle()}deg, #422f66 0deg)`,
        }}
      >
        <div className="h-[200px] w-[200px] rounded-full bg-[#1e1b2e] flex items-center justify-center text-white text-3xl">
          {formatTime(timeLeft)}
        </div>
      </div>

      <div className="flex items-center mt-6 gap-3">
        {!isRunning ? (
          <button
            onClick={() => setIsRunning(true)}
            className="h-10 w-24 bg-[#7d59c1] text-white rounded-md text-sm"
          >
            Start
          </button>
        ) : (
          <button
            onClick={() => setIsRunning(false)}
            className="h-10 w-24 bg-[#7d59c1] text-white rounded-md text-sm"
          >
            Stop
          </button>
        )}
        <button
          onClick={resetTimer}
          className="h-10 w-24 bg-[#7d59c1] text-white rounded-md text-sm ml-auto"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default PomodoroApp;
