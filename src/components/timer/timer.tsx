"use client";
import { useState, useEffect } from "react";

export default function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [streak, setStreak] = useState(5); // Example
  const [intervalType, setIntervalType] = useState<"study" | "break">("study");

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (intervalType === "study") {
        alert("Study session finished! Time for a break.");
      } else {
        alert("Break finished! Back to studying.");
      }
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isRunning, timeLeft, intervalType]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const startStudy = () => {
    setIntervalType("study");
    setTimeLeft(25 * 60);
    setIsRunning(true);
  };

  const startBreak = () => {
    setIntervalType("break");
    setTimeLeft(5 * 60);
    setIsRunning(true);
  };

  const togglePause = () => {
    setIsRunning((prev) => !prev);
  };

  const reset = () => {
    setIsRunning(false);
    setTimeLeft(intervalType === "study" ? 25 * 60 : 5 * 60);
  };

  return (
    <div className="flex flex-col items-center justify-center h-120 w-100 bg-white/70 font-sans">
      <h1 className="text-2xl font-bold mb-6">Pomodoro Timer</h1>

      {/* Timer rectangle */}
      <div className="bg-white/50 px-16 py-6 rounded-lg shadow-md mb-6">
        <span className="text-6xl font-mono text-black">{formatTime(timeLeft)}</span>
      </div>

      {/* Buttons Centered */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        <button
          onClick={startStudy}
          className="bg-[#002B5C] text-white px-5 py-2 rounded-lg shadow hover:bg-[#001F43] transition"
        >
          Study (25m)
        </button>
        <button
          onClick={startBreak}
          className="bg-[#6C92D0] text-white px-5 py-2 rounded-lg shadow hover:bg-[#5776A8] transition"
        >
          Break (5m)
        </button>
      </div>

      <div className="flex justify-center gap-3 mb-6">
        <button
          onClick={togglePause}
          className="bg-gray-700 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-900 transition"
        >
          {isRunning ? "Pause" : "Resume"}
        </button>
        <button
          onClick={reset}
          className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow hover:bg-gray-500 transition"
        >
          Reset
        </button>
      </div>

      {/* Streak */}
      <p className="text-lg mt-2">
        🔥 You’ve focused for{" "}
        <span className="font-bold">{streak}</span> days in a row!
      </p>
    </div>
  );
}
