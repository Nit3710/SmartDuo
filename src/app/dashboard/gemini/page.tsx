"use client";
import React, { useState } from "react";
import { askGemini } from "../../utils/gemini";
import { Sparkles } from "lucide-react";

export default function GeminiDemo() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    setLoading(true);
    setResponse(null);
    try {
      const data = await askGemini(input);
      setResponse(data.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
    } catch (e) {
      setResponse("Error: " + (e as Error).message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-950 py-10 transition-colors">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 w-full max-w-lg">
        <div className="flex items-center gap-2">
          <Sparkles className="text-blue-600 dark:text-blue-400" size={28} />
          <h2 className="text-2xl font-bold text-blue-700 dark:text-blue-300">Gemini AI Chat</h2>
        </div>
        <input
          className="border border-blue-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask Gemini something..."
          disabled={loading}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow transition disabled:opacity-60"
          onClick={handleAsk}
          disabled={loading || !input.trim()}
        >
          {loading ? "Thinking..." : "Ask Gemini"}
        </button>
        <div className="w-full min-h-[80px] bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-gray-800 dark:text-gray-100 whitespace-pre-wrap">
          {loading && <span className="animate-pulse text-blue-600">Gemini is thinking...</span>}
          {!loading && response}
        </div>
      </div>
    </div>
  );
}