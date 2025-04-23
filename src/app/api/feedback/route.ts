import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/mongodb";
import Feedback from "@/app/_models/Feedback";

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const feedback = await Feedback.create(data);
  return NextResponse.json(feedback, { status: 201 });
}

export async function GET() {
  await dbConnect();
  // Only show approved feedback publicly
  const feedbacks = await Feedback.find({ approved: true }).sort({ createdAt: -1 });
  return NextResponse.json(feedbacks);
}
