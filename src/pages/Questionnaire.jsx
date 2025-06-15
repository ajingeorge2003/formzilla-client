import { useState } from 'react';

export default function Questionnaire() {
  const [answers, setAnswers] = useState({});

  const questions = [
    'What is your favorite programming language?',
    'How many hours do you code per day?',
    'Do you prefer frontend or backend development?'
  ];

  const handleChange = (e, index) => {
    setAnswers({ ...answers, [index]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(answers);
    alert('Responses submitted!');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6">User Questionnaire</h2>
        {questions.map((q, i) => (
          <div key={i} className="mb-4">
            <label className="block mb-2 font-semibold">{q}</label>
            <input
              type="text"
              className="w-full p-3 border rounded bg-gray-800 text-white"
              onChange={(e) => handleChange(e, i)}
            />
          </div>
        ))}
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded mt-4 font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
