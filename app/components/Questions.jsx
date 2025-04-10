"use client";

export default function Question({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  correctAnswer,
  submitted,
}) {
  const getOptionStyle = (option) => {
    if (submitted) {
      if (option === correctAnswer) return "border-green-500 bg-green-100";
      if (option === selectedAnswer) return "border-red-500 bg-red-100";
      return "border-gray-200 opacity-50";
    } else {
      return selectedAnswer === option
        ? "border-indigo-500 bg-indigo-100"
        : "border-gray-300 hover:border-indigo-400";
    }
  };

  return (
    <div className="border rounded-lg shadow-sm p-4 bg-white mb-4">
      <h2 className="text-xl font-semibold mb-4">{question}</h2>
      <ul>
        {options.map((option, idx) => (
          <li key={idx} className="mb-2">
            <label
              onClick={() => onAnswerSelect(option)}
              className={`block p-2 border rounded cursor-pointer transition-all ${getOptionStyle(
                option
              )}`}
            >
              <input
                type="radio"
                className="hidden"
                name={question}
                value={option}
                checked={selectedAnswer === option}
                readOnly
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {submitted && (
        <p className="mt-2 text-sm font-medium">
          {selectedAnswer === correctAnswer ? (
            <span className="text-green-600">✅ Correct!</span>
          ) : (
            <span className="text-red-600">
              ❌ Incorrect. Correct answer: <strong>{correctAnswer}</strong>
            </span>
          )}
        </p>
      )}
    </div>
  );
}
