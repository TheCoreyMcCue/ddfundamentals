"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser } from "../components/EmailGate";

const certificationQuizzes = [
  { id: "fundamentals", title: "Fundamentals Quiz", icon: "🐶", category: "Datadog Certifications" },
  { id: "log-fundamentals", title: "Log Management Fundamentals", icon: "🪵", category: "Datadog Certifications" },
  { id: "apm-fundamentals", title: "APM Fundamentals", icon: "📡", category: "Datadog Certifications" },
  { id: "aws-ccp", title: "AWS Cloud Practitioner", icon: "☁️", category: "Cloud Certifications" },
  { id: "gcp-cdl", title: "GCP Cloud Digital Leader", icon: "🌐", category: "Cloud Certifications" },
];

function aggregateStats(results) {
  const map = {};
  results.forEach((item) => {
    if (item.quizId === "PROFILE") return;
    if (item.quizId?.startsWith("COMPLETE#")) {
      const slug = item.quizId.replace("COMPLETE#", "");
      map[slug] = { ...map[slug], completed: true, completedAt: item.completedAt };
      return;
    }
    const slug = item.quizSlug;
    if (!slug) return;
    if (!map[slug]) map[slug] = { bestScore: 0, attempts: 0, lastAttempted: null };
    map[slug].attempts++;
    if (item.score > map[slug].bestScore) map[slug].bestScore = item.score;
    if (!map[slug].lastAttempted || item.completedAt > map[slug].lastAttempted) {
      map[slug].lastAttempted = item.completedAt;
    }
  });
  return map;
}

function formatDate(iso) {
  if (!iso) return null;
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

export default function ProgressPage() {
  const userEmail = useUser();
  const [statsMap, setStatsMap] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userEmail) return;
    fetch(`/api/results?userId=${encodeURIComponent(userEmail)}`)
      .then((r) => r.json())
      .then(({ results }) => setStatsMap(aggregateStats(results ?? [])))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [userEmail]);

  const completedCount = certificationQuizzes.filter((q) => statsMap[q.id]?.completed).length;
  const totalCount = certificationQuizzes.length;
  const progressPct = Math.round((completedCount / totalCount) * 100);

  const grouped = certificationQuizzes.reduce((acc, q) => {
    if (!acc[q.category]) acc[q.category] = [];
    acc[q.category].push(q);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-[#0a0a10] text-white">
      <div className="mx-auto max-w-3xl px-6 py-12">

        {/* Back link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/8 bg-white/4 px-3 py-1.5 text-sm text-slate-400 hover:border-white/15 hover:text-white transition-all"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <p className="mb-1 text-sm font-medium uppercase tracking-widest text-[#9b6dda]">
            My Progress
          </p>
          <h1 className="text-3xl font-bold text-white">Certification Tracker</h1>
          <p className="mt-2 text-slate-400 text-sm">Track your progress towards completing all certifications.</p>
        </div>

        {/* Overall progress */}
        <div className="rounded-2xl border border-white/8 bg-slate-900/50 p-6 mb-8 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-300">Overall Completion</span>
            <span className="text-sm font-semibold text-white">{completedCount} / {totalCount}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-white/8">
            <div
              className="h-2 rounded-full bg-[#632CA6] transition-all duration-700"
              style={{ width: `${progressPct}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-slate-500">{progressPct}% complete</p>
        </div>

        {/* Grouped certification list */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-6 h-6 rounded-full border-2 border-[#632CA6] border-t-transparent animate-spin" />
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(grouped).map(([category, quizzes]) => (
              <div key={category}>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">{category}</h2>
                <div className="space-y-3">
                  {quizzes.map((quiz) => {
                    const stats = statsMap[quiz.id] ?? {};
                    const { completed, completedAt, bestScore, attempts, lastAttempted } = stats;
                    return (
                      <div
                        key={quiz.id}
                        className={`rounded-xl border p-4 flex items-center gap-4 transition-all ${
                          completed
                            ? "border-emerald-500/30 bg-emerald-500/5"
                            : "border-white/8 bg-white/3"
                        }`}
                      >
                        {/* Completion indicator */}
                        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                          completed
                            ? "border-emerald-500 bg-emerald-500/20 text-emerald-400"
                            : "border-white/15 text-slate-600"
                        }`}>
                          {completed ? (
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          ) : (
                            <span className="text-lg leading-none">{quiz.icon}</span>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className={`text-sm font-semibold ${completed ? "text-white" : "text-slate-300"}`}>
                              {quiz.title}
                            </p>
                            {completed && (
                              <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/15 border border-emerald-500/25 px-2 py-0.5 text-xs font-medium text-emerald-400">
                                Completed
                              </span>
                            )}
                          </div>
                          <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                            {completed && completedAt && (
                              <span>Certified {formatDate(completedAt)}</span>
                            )}
                            {attempts > 0 && (
                              <>
                                {completed && <span>·</span>}
                                <span>Best: <span className="text-slate-300">{bestScore}%</span></span>
                                <span>·</span>
                                <span>{attempts} attempt{attempts !== 1 ? "s" : ""}</span>
                                {lastAttempted && (
                                  <>
                                    <span>·</span>
                                    <span>Last: {formatDate(lastAttempted)}</span>
                                  </>
                                )}
                              </>
                            )}
                            {!attempts && !completed && (
                              <span>Not started</span>
                            )}
                            {!attempts && completed && (
                              <span className="text-slate-500">No practice attempts recorded</span>
                            )}
                          </div>
                        </div>

                        {/* Practice link */}
                        <Link
                          href={`/quiz/${quiz.id}`}
                          className="shrink-0 rounded-lg border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-slate-400 hover:border-[#632CA6]/50 hover:text-white transition-all"
                        >
                          Practice →
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
