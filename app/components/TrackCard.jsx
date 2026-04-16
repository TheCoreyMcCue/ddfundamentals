import Link from "next/link";

const difficultyStyles = {
  Beginner: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
  Intermediate: "bg-amber-500/15 text-amber-400 border border-amber-500/25",
  Mixed: "bg-blue-500/15 text-blue-400 border border-blue-500/25",
};

export default function TrackCard({ quiz }) {
  const { id, title, duration, difficulty, level, icon } = quiz;

  return (
    <Link
      href={`/quiz/${id}`}
      className="group flex flex-col gap-4 rounded-xl border border-white/8 bg-white/4 p-5 transition-all duration-200 hover:border-[#632CA6]/60 hover:bg-white/6 hover:-translate-y-0.5"
    >
      {/* Top row: icon + level badge */}
      <div className="flex items-start justify-between">
        <span className="text-3xl leading-none">{icon}</span>
        <span className="rounded-md bg-[#632CA6]/20 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-[#632CA6]/30">
          {level}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-sm font-semibold text-white leading-snug group-hover:text-purple-200 transition-colors">
        {title}
      </h3>

      {/* Bottom row: duration + difficulty */}
      <div className="mt-auto flex items-center justify-between gap-2">
        <span className="text-xs text-gray-500">{duration}</span>
        <span
          className={`rounded-md px-2 py-0.5 text-xs font-medium ${difficultyStyles[difficulty] ?? difficultyStyles.Mixed}`}
        >
          {difficulty}
        </span>
      </div>
    </Link>
  );
}
