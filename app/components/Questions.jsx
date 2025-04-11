"use client";

export default function Question({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  correctAnswer,
  checkedStatus,
}) {
  const getOptionStyle = (option) => {
    if (checkedStatus) {
      if (option === correctAnswer) return "border-green-500 bg-green-100";
      if (option === selectedAnswer) return "border-red-500 bg-red-100";
      return "border-gray-200 opacity-50";
    } else {
      return selectedAnswer === option
        ? "border-[#632CA6] bg-purple-50 ring-2 ring-purple-200"
        : "border-gray-300 hover:border-[#632CA6] hover:bg-gray-50";
    }
  };

  return (
    <div className="rounded-2xl shadow-md p-6 bg-white mb-8 transition-all border-t-4 border-[#632CA6]">
      <h2 className="text-xl font-semibold mb-4 text-black">{question}</h2>
      <ul className="space-y-3">
        {options.map((option, idx) => (
          <li key={idx}>
            <label
              onClick={() => onAnswerSelect(option)}
              className={`block px-4 py-3 border rounded-lg cursor-pointer transition-all duration-200 ${getOptionStyle(
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
              <span className="text-black">{option}</span>
            </label>
          </li>
        ))}
      </ul>
      {checkedStatus && (
        <div className="mt-4 text-sm font-medium space-y-1">
          {checkedStatus === "correct" ? (
            <p className="text-green-600">✅ Correct!</p>
          ) : (
            <>
              <p className="text-red-600">❌ Incorrect.</p>
              <p className="text-black">
                ✅ Correct answer: <strong>{correctAnswer}</strong>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
