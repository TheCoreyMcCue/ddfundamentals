"use client";

const OPTION_LABELS = ["A", "B", "C", "D", "E"];

export default function Question({
  question,
  options,
  selectedAnswer,
  onAnswerSelect,
  correctAnswer,
  checkedStatus,
  questionNumber,
}) {
  const getOptionStyle = (option) => {
    if (checkedStatus) {
      if (option === correctAnswer)
        return "border-emerald-500/60 bg-emerald-500/10 text-emerald-300";
      if (option === selectedAnswer)
        return "border-red-500/60 bg-red-500/10 text-red-300";
      return "border-white/5 bg-white/3 text-slate-500 opacity-50";
    }
    return selectedAnswer === option
      ? "border-[#632CA6] bg-[#632CA6]/15 text-white"
      : "border-white/8 bg-white/4 text-slate-300 hover:border-[#632CA6]/50 hover:bg-white/7 hover:text-white";
  };

  const getLabelStyle = (option) => {
    if (checkedStatus) {
      if (option === correctAnswer) return "bg-emerald-500/20 text-emerald-300";
      if (option === selectedAnswer) return "bg-red-500/20 text-red-300";
      return "bg-white/5 text-slate-500";
    }
    return selectedAnswer === option
      ? "bg-[#632CA6] text-white"
      : "bg-white/8 text-slate-400 group-hover:bg-[#632CA6]/30 group-hover:text-purple-300";
  };

  return (
    <div className="rounded-2xl border border-white/8 bg-slate-900/50 p-6 mb-5 backdrop-blur-sm">
      <div className="flex items-start gap-3 mb-5">
        {questionNumber && (
          <span className="shrink-0 mt-0.5 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Q{questionNumber}
          </span>
        )}
        <h2 className="text-base font-semibold text-white leading-snug">
          {question}
        </h2>
      </div>

      <ul className="space-y-2.5">
        {options.map((option, idx) => (
          <li key={idx}>
            <label
              onClick={() => !checkedStatus && onAnswerSelect(option)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-150 ${getOptionStyle(option)} ${checkedStatus ? "cursor-default" : ""}`}
            >
              <input
                type="radio"
                className="hidden"
                name={question}
                value={option}
                checked={selectedAnswer === option}
                readOnly
              />
              <span
                className={`shrink-0 w-6 h-6 rounded-md text-xs font-bold flex items-center justify-center transition-all duration-150 ${getLabelStyle(option)}`}
              >
                {OPTION_LABELS[idx]}
              </span>
              <span className="text-sm leading-snug">{option}</span>
            </label>
          </li>
        ))}
      </ul>

      {checkedStatus && (
        <div className="mt-4 pt-4 border-t border-white/6 text-sm font-medium">
          {checkedStatus === "correct" ? (
            <p className="text-emerald-400 flex items-center gap-2">
              <span className="text-base">✓</span> Correct!
            </p>
          ) : (
            <div className="space-y-1">
              <p className="text-red-400 flex items-center gap-2">
                <span className="text-base">✕</span> Incorrect
              </p>
              <p className="text-slate-400">
                Correct answer:{" "}
                <span className="text-white font-semibold">{correctAnswer}</span>
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
