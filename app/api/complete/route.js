import { NextResponse } from "next/server";
import { setQuizComplete } from "@/utils/dynamodb";

export async function POST(request) {
  const { userId, quizSlug, completed } = await request.json();
  if (!userId || !quizSlug) {
    return NextResponse.json({ error: "userId and quizSlug are required" }, { status: 400 });
  }
  await setQuizComplete(userId, quizSlug, completed);
  return NextResponse.json({ ok: true });
}
