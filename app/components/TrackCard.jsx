"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useUser } from "./EmailGate";

const difficultyStyles = {
  Beginner: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  Intermediate: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  Mixed: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
};

function formatDate(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function TrackCard({ quiz, stats = {}, onCompleteToggle }) {
  const { id, title, duration, difficulty, level, icon, certification } = quiz;
  const { bestScore, attempts, lastAttempted, completed } = stats;
  const userEmail = useUser();
  const [isCompleted, setIsCompleted] = useState(!!completed);

  useEffect(() => {
    setIsCompleted(!!completed);
  }, [completed]);
  const [toggling, setToggling] = useState(false);

  const handleComplete = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!userEmail || toggling) return;
    const next = !isCompleted;
    setIsCompleted(next);
    setToggling(true);
    try {
      await fetch("/api/complete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: userEmail, quizSlug: id, completed: next }),
      });
      onCompleteToggle?.(id, next);
    } catch {
      setIsCompleted(!next);
    } finally {
      setToggling(false);
    }
  };

  return (
    <Link
      href={`/quiz/${id}`}
      className="group flex flex-col gap-4 rounded-xl border border-white/8 bg-white/4 p-5 transition-all duration-200 hover:border-[#632CA6]/60 hover:bg-white/6 hover:-translate-y-0.5"
    >
      {/* Top row: icon + badges */}
      <div className="flex items-start justify-between">
        <span className="text-3xl leading-none">{icon}</span>
        <div className="flex flex-col items-end gap-1.5">
          <span className="rounded-md bg-[#632CA6]/20 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-[#632CA6]/30">
            {level}
          </span>
          {certification && (
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/15 border border-amber-500/30 px-2 py-0.5 text-xs font-medium text-amber-400">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              Certification
            </span>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-purple-200 transition-colors">
        {title}
      </h3>

      {/* Stats row */}
      {attempts > 0 && (
        <div className="flex items-center gap-3 text-xs text-slate-500">
          <span className="text-emerald-400 font-semibold">Best: {bestScore}%</span>
          <span>·</span>
          <span>{attempts} attempt{attempts !== 1 ? "s" : ""}</span>
          {lastAttempted && (
            <>
              <span>·</span>
              <span>{formatDate(lastAttempted)}</span>
            </>
          )}
        </div>
      )}

      {/* Bottom row: duration + difficulty + mark complete */}
      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="text-xs text-gray-500">{duration}</span>
        <div className="flex items-center gap-2">
          <span
            className={`rounded-md px-2 py-0.5 text-xs font-medium ${difficultyStyles[difficulty] ?? difficultyStyles.Mixed}`}
          >
            {difficulty}
          </span>
          {certification && (
            <button
              onClick={handleComplete}
              disabled={toggling}
              title={isCompleted ? "Mark as incomplete" : "Mark as complete"}
              className={`flex items-center justify-center w-6 h-6 rounded-md border transition-all duration-150 ${
                isCompleted
                  ? "border-emerald-500/60 bg-emerald-500/20 text-emerald-400"
                  : "border-white/15 bg-white/5 text-slate-600 hover:border-emerald-500/40 hover:text-emerald-500/60"
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </Link>
  );
}
