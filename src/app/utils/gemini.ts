import axios from "axios";

const GEMINI_API_KEY ="AIzaSyBDs-3uJAmK__9RjjJEIVwr9PX0Vzpp2yI" 

export async function askGemini(prompt: string) {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + GEMINI_API_KEY;
  const data = {
    contents: [{ parts: [{ text: prompt }] }]
  };
  const res = await axios.post(url, data);
  return res.data;
}