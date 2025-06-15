export default function UserDashboard() {
  const sampleQuestions = [
    "How satisfied are you with the event?",
    "Would you recommend it to others?",
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>

      {sampleQuestions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q}</p>
          <input
            type="text"
            placeholder="Your answer..."
            className="border p-2 w-1/2 rounded"
          />
        </div>
      ))}

      <button className="bg-blue-600 text-white px-6 py-2 rounded mt-4">
        Submit
      </button>
    </div>
  );
}
