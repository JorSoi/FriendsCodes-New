"use client";

import type React from "react";

import { useState, useOptimistic } from "react";
import { startTransition } from "react";

export default function Page() {
  const [input, setInput] = useState("");
  const [list, setList] = useState<string[]>(["test1", "test2"]);

  const [optimisticList, addOptimisticItem] = useOptimistic(
    list,
    (state, newItem: string) => [...state, newItem],
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    startTransition(async () => {
      addOptimisticItem(input);
      try {
        const res = await apiCall();
        if (res) {
          setList((prev) => [...prev, input]);
          setInput("");
        }
      } catch (error) {
        console.error("API call failed", error);
      }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const apiCall = (success = true) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (success) {
          resolve({ success: true, data: "Here is your data!" });
        } else {
          reject({ success: false, data: "Has errored" });
        }
      }, 2000);
    });

  return (
    <div className="mx-auto max-w-md p-6">
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          name="input"
          type="text"
          onChange={handleChange}
          value={input}
          className="flex-1 rounded border px-3 py-2 text-black"
          placeholder="Add new item"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 disabled:opacity-50"
        >
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {optimisticList.map((item, index) => (
          <li key={`${item}-${index}`} className="rounded border p-3">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
