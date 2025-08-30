"use client";
import { useState } from "react";

export default function TodoPage() {
  const [tasks, setTasks] = useState<{ id: number; text: string; done: boolean }[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen font-sans bg-cover bg-center"
      style={{ backgroundImage: "url('/pomodoro-screen.png')" }}
    >
      <h1 className="text-2xl font-bold mb-6 text-white drop-shadow">
        UniMelb To-Do List ✅
      </h1>

      {/* Container */}
      <div className="w-96 bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6">
        
        {/* Input */}
        <div className="flex gap-2 mb-4">
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
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center px-3 py-2 rounded-lg ${
                task.done ? "bg-green-100 line-through text-gray-500" : "bg-white/90"
              }`}
            >
              <span
                onClick={() => toggleTask(task.id)}
                className="cursor-pointer"
              >
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
