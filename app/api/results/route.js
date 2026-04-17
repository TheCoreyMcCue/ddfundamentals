import { NextResponse } from "next/server";
import { saveQuizResult, getUserResults } from "@/utils/dynamodb";

export async function POST(request) {
  const body = await request.json();
  const { userId, quizId, score, correctCount, totalQuestions, quizSlug } = body;

  if (!userId || !quizId) {
    return NextResponse.json({ error: "userId and quizId are required" }, { status: 400 });
  }

  await saveQuizResult({ userId, quizId, score, correctCount, totalQuestions, quizSlug });
  return NextResponse.json({ ok: true });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  const results = await getUserResults(userId);
  return NextResponse.json({ results });
}
