import { NextResponse } from "next/server";
import { saveUser, getUser } from "@/utils/dynamodb";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "email is required" }, { status: 400 });
  }
  const user = await getUser(email);
  return NextResponse.json({ exists: !!user });
}

export async function POST(request) {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ error: "email is required" }, { status: 400 });
  }
  await saveUser({ email, name: "", image: "" });
  return NextResponse.json({ ok: true });
}
