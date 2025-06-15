import { useState } from "react";

export default function AdminDashboard() {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");

  const addQuestion = () => {
    setQuestions([...questions, newQuestion]);
    setNewQuestion("");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4">
        <input
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
          placeholder="Enter a question"
          className="border p-2 w-1/2 rounded"
        />
        <button
          onClick={addQuestion}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Questions</h2>
      <ul>
        {questions.map((q, i) => (
          <li key={i} className="mb-2 p-2 bg-gray-100 rounded">{q}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">📊 Analytics</h2>
      <p className="text-gray-500">Coming soon...</p>
    </div>
  );
}
