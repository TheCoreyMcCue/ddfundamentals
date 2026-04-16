import TrackCard from "./TrackCard";

export default function TrackSection({ category, description, quizzes }) {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-white">{category}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <TrackCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </section>
  );
}
