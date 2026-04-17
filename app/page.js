"use client";
import { useState, useEffect, useCallback } from "react";
import TrackSection from "./components/TrackSection";
import { useUser } from "./components/EmailGate";

const tracks = [
  {
    category: "Datadog Core",
    description: "Foundation knowledge every SE needs on day one",
    quizzes: [
      {
        id: "fundamentals",
        title: "Fundamentals Quiz",
        duration: "~30 min",
        difficulty: "Beginner",
        level: "L100",
        icon: "🐶",
        certification: true,
      },
      {
        id: "log-fundamentals",
        title: "Log Management Fundamentals",
        duration: "~15 min",
        difficulty: "Intermediate",
        level: "L200",
        icon: "🪵",
        certification: true,
      },
      {
        id: "apm-fundamentals",
        title: "APM Fundamentals",
        duration: "~15 min",
        difficulty: "Intermediate",
        level: "L200",
        icon: "📡",
        certification: true,
      },
    ],
  },
  {
    category: "Product Expertise",
    description: "Deep dives into key product areas and customer FAQs",
    quizzes: [
      {
        id: "infrastructure",
        title: "Infrastructure Customer FAQ",
        duration: "~15 min",
        difficulty: "Intermediate",
        level: "L200",
        icon: "🖥️",
      },
      {
        id: "logs",
        title: "Logs Customer FAQ",
        duration: "~15 min",
        difficulty: "Intermediate",
        level: "L200",
        icon: "📋",
      },
      {
        id: "apm",
        title: "APM FAQ",
        duration: "~15 min",
        difficulty: "Intermediate",
        level: "L200",
        icon: "📡",
      },
    ],
  },
  {
    category: "Cloud Certifications",
    description: "Practice exams for AWS and other cloud provider certifications",
    quizzes: [
      {
        id: "aws-ccp",
        title: "AWS Cloud Practitioner",
        duration: "~45 min",
        difficulty: "Intermediate",
        level: "CCP",
        icon: "☁️",
        certification: true,
      },
    ],
  },
  {
    category: "SE Excellence",
    description: "Mixed challenges to sharpen cross-product expertise",
    quizzes: [
      {
        id: "random",
        title: "Random FAQs",
        duration: "~10 min",
        difficulty: "Mixed",
        level: "L300",
        icon: "🔀",
      },
    ],
  },
];

const allQuizzes = tracks.flatMap((t) => t.quizzes);
const totalModules = allQuizzes.filter((q) => q.certification).length;

function getFirstName(email) {
  if (!email) return "SE";
  const local = email.split("@")[0];
  const first = local.split(".")[0];
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function aggregateStats(results) {
  const map = {};
  results.forEach((item) => {
    if (item.quizId === "PROFILE") return;
    if (item.quizId?.startsWith("COMPLETE#")) {
      const slug = item.quizId.replace("COMPLETE#", "");
      map[slug] = { ...map[slug], completed: true };
      return;
    }
    const slug = item.quizSlug;
    if (!slug) return;
    if (!map[slug]) map[slug] = { bestScore: 0, attempts: 0, lastAttempted: null, completed: false };
    map[slug].attempts++;
    if (item.score > map[slug].bestScore) map[slug].bestScore = item.score;
    if (!map[slug].lastAttempted || item.completedAt > map[slug].lastAttempted) {
      map[slug].lastAttempted = item.completedAt;
    }
  });
  return map;
}

export default function Home() {
  const userEmail = useUser();
  const [showBanner, setShowBanner] = useState(true);
  const [statsMap, setStatsMap] = useState({});

  useEffect(() => {
    if (!userEmail) return;
    fetch(`/api/results?userId=${encodeURIComponent(userEmail)}`)
      .then((r) => r.json())
      .then(({ results }) => setStatsMap(aggregateStats(results ?? [])))
      .catch(() => {});
  }, [userEmail]);

  const handleCompleteToggle = useCallback((quizId, completed) => {
    setStatsMap((prev) => ({
      ...prev,
      [quizId]: { ...prev[quizId], completed },
    }));
  }, []);

  const certificationIds = new Set(allQuizzes.filter((q) => q.certification).map((q) => q.id));
  const completedCount = Object.entries(statsMap).filter(([id, s]) => s.completed && certificationIds.has(id)).length;
  const progressPct = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  return (
    <div className="min-h-screen bg-[#0a0a10] text-white">
      {/* Cookie Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-between gap-3 border-t border-white/10 bg-[#13131e] px-6 py-4 text-sm sm:flex-row">
          <span className="text-gray-400">
            We use cookies to enhance the user experience. By continuing, you
            accept our use of cookies.
          </span>
          <div className="flex shrink-0 gap-2">
            <button
              onClick={() => setShowBanner(false)}
              className="rounded-lg bg-[#632CA6] px-4 py-1.5 text-white hover:bg-purple-700 transition-colors"
            >
              Accept
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="rounded-lg border border-white/15 px-4 py-1.5 text-gray-400 hover:bg-white/5 transition-colors"
            >
              Decline
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <div className="border-b border-white/8 bg-gradient-to-b from-[#1a0a2e]/60 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-[#9b6dda]">
            SE Learning Track
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Welcome, {getFirstName(userEmail)} 👋
          </h1>
          <p className="mt-3 text-gray-400">
            Build product expertise and crush your customer conversations.
          </p>

          {/* Progress pill */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                Progress
              </span>
              <span className="text-lg font-semibold text-white">
                {completedCount} /{" "}
                <span className="text-gray-400">{totalModules} Modules</span>
              </span>
            </div>
            <div className="h-10 w-px bg-white/10" />
            <div className="w-36">
              <div className="mb-1 flex justify-between text-xs text-gray-500">
                <span>Completed</span>
                <span>{progressPct}%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-white/10">
                <div
                  className="h-1.5 rounded-full bg-[#632CA6] transition-all duration-500"
                  style={{ width: `${progressPct}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Track sections */}
      <div className="mx-auto max-w-5xl space-y-12 px-6 py-12 pb-24">
        {tracks.map((track) => (
          <TrackSection
            key={track.category}
            category={track.category}
            description={track.description}
            quizzes={track.quizzes}
            statsMap={statsMap}
            onCompleteToggle={handleCompleteToggle}
          />
        ))}
      </div>
    </div>
  );
}
