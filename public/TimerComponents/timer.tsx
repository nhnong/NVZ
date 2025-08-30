"use client";
import { useState, useEffect } from "react";

export default function TimerPage() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // format mm:ss
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev > 0) return prev;
          // Switch session/break when timer hits 0
          if (isBreak) {
            setIsBreak(false);
            return 25 * 60;
          } else {
            setIsBreak(true);
            return 5 * 60;
          }
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, isBreak]);

  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    setSeconds(25 * 60);
  };

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>
      <h1>{isBreak ? "Break Time" : "Focus Time"}</h1>
      <h2 style={{ fontSize: "2rem", margin: "1rem 0" }}>
        {formatTime(seconds)}
      </h2>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={handleReset} style={{ marginLeft: "0.5rem" }}>
        Reset
      </button>
    </div>
  );
}
