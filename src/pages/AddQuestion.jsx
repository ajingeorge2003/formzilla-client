import { useState } from 'react';

export default function AddQuestion() {
  const [question, setQuestion] = useState('');

  const handleAdd = () => {
    console.log('Added question:', question);
    alert('Question added!');
    setQuestion('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Question</h2>
        <input
          type="text"
          placeholder="Enter your question here"
          className="w-full p-3 mb-4 border rounded bg-gray-800 text-white"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button
          className="w-full bg-green-500 text-white py-3 rounded font-semibold"
          onClick={handleAdd}
        >
          Add Question
        </button>
      </div>
    </div>
  );
}
