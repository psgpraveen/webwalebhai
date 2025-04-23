import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/mongodb";
import Feedback from "@/app/_models/Feedback";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const { response } = await req.json();
  const feedback = await Feedback.findByIdAndUpdate(params.id, { response }, { new: true });
  return NextResponse.json(feedback);
}
