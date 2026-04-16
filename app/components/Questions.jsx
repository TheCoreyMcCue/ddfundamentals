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
  multiSelect,
}) {
  const isSelected = (option) =>
    multiSelect
      ? Array.isArray(selectedAnswer) && selectedAnswer.includes(option)
      : selectedAnswer === option;

  const isCorrect = (option) =>
    Array.isArray(correctAnswer)
      ? correctAnswer.includes(option)
      : option === correctAnswer;

  const getOptionStyle = (option) => {
    if (checkedStatus) {
      if (isCorrect(option))
        return "border-emerald-500/60 bg-emerald-500/10 text-emerald-300";
      if (isSelected(option))
        return "border-red-500/60 bg-red-500/10 text-red-300";
      return "border-white/5 bg-white/3 text-slate-500 opacity-40";
    }
    return isSelected(option)
      ? "border-[#632CA6] bg-[#632CA6]/15 text-white"
      : "border-white/8 bg-white/4 text-slate-300 hover:border-[#632CA6]/50 hover:bg-white/7 hover:text-white";
  };

  const getLabelStyle = (option) => {
    if (checkedStatus) {
      if (isCorrect(option)) return "bg-emerald-500/20 text-emerald-300";
      if (isSelected(option)) return "bg-red-500/20 text-red-300";
      return "bg-white/5 text-slate-500";
    }
    return isSelected(option)
      ? "bg-[#632CA6] text-white"
      : "bg-white/8 text-slate-400 group-hover:bg-[#632CA6]/30 group-hover:text-purple-300";
  };

  const selectCount = Array.isArray(correctAnswer) ? correctAnswer.length : null;
  const selectedCount = Array.isArray(selectedAnswer) ? selectedAnswer.length : 0;

  return (
    <div className="rounded-2xl border border-white/8 bg-slate-900/50 p-6 mb-5 backdrop-blur-sm">
      {/* Question header */}
      <div className="flex items-start gap-3 mb-1.5">
        {questionNumber && (
          <span className="shrink-0 mt-0.5 text-xs font-semibold text-slate-500 uppercase tracking-widest">
            Q{questionNumber}
          </span>
        )}
        <h2 className="text-base font-semibold text-white leading-snug">
          {question}
        </h2>
      </div>

      {/* Multi-select hint */}
      {multiSelect && (
        <div className="mb-4 ml-8">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-purple-500/10 border border-purple-500/20 px-2.5 py-1 text-xs font-medium text-purple-300">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Select {selectCount}
            {!checkedStatus && selectedCount > 0 && (
              <span className="text-purple-400">· {selectedCount}/{selectCount} chosen</span>
            )}
          </span>
        </div>
      )}

      {/* Options */}
      <ul className="space-y-2.5">
        {options.map((option, idx) => (
          <li key={idx}>
            <label
              onClick={() => !checkedStatus && onAnswerSelect(option)}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-150 ${
                checkedStatus ? "cursor-default" : "cursor-pointer"
              } ${getOptionStyle(option)}`}
            >
              {/* Letter badge — square for multi-select, rounded for single */}
              <span
                className={`shrink-0 w-6 h-6 text-xs font-bold flex items-center justify-center transition-all duration-150 ${
                  multiSelect ? "rounded-sm" : "rounded-md"
                } ${getLabelStyle(option)}`}
              >
                {multiSelect && isSelected(option) && !checkedStatus
                  ? "✓"
                  : OPTION_LABELS[idx]}
              </span>
              <span className="text-sm leading-snug">{option}</span>

              {/* Missed indicator for multi-select reveal */}
              {checkedStatus && multiSelect && isCorrect(option) && !isSelected(option) && (
                <span className="ml-auto shrink-0 text-xs text-emerald-400 font-medium">
                  correct answer
                </span>
              )}
            </label>
          </li>
        ))}
      </ul>

      {/* Feedback */}
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
              {Array.isArray(correctAnswer) ? (
                <p className="text-slate-400">
                  Correct answers:{" "}
                  <span className="text-white font-semibold">
                    {correctAnswer.join(" and ")}
                  </span>
                </p>
              ) : (
                <p className="text-slate-400">
                  Correct answer:{" "}
                  <span className="text-white font-semibold">{correctAnswer}</span>
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
