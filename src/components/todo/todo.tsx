"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  // ---------------- Pomodoro ----------------
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

  // ---------------- To-Do ----------------
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task)));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ---------------- UI ----------------
  return (
    <div
      className="flex items-start justify-center min-h-screen font-sans bg-cover bg-center p-8 gap-8"
    >
      {/* Pomodoro Timer */}
      <div className="flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">Pomodoro Timer</h1>

        {/* Timer */}
        <div className="bg-white/50 px-16 py-6 rounded-lg shadow-md mb-6">
          <span className="text-6xl font-mono text-black">{formatTime(timeLeft)}</span>
        </div>

        {/* Buttons */}
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

        <p className="text-lg mt-2">
          🔥 You’ve focused for <span className="font-bold">{streak}</span> days in a row!
        </p>
      </div>

      {/* To-Do List */}
      <div className="flex flex-col items-center bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold mb-6">To-Do List ✅</h1>

        {/* Input */}
        <div className="flex gap-2 mb-4 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a task..."
            className="flex-grow px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#002B5C]"
          />
          <button
            onClick={addTask}
            className="bg-[#002B5C] text-white px-4 py-2 rounded-lg shadow hover:bg-[#001F43] transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul className="space-y-2 w-full">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center px-3 py-2 rounded-lg ${
                task.done ? "bg-green-100 line-through text-gray-500" : "bg-white/90"
              }`}
            >
              <span onClick={() => toggleTask(task.id)} className="cursor-pointer">
                {task.text}
              </span>
              <button
                onClick={() => removeTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
