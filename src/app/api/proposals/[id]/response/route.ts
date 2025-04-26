import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/mongodb";
import Proposal from "@/app/_models/Proposal";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  await dbConnect();
  const { response } = await req.json();
  const proposal = await Proposal.findByIdAndUpdate(params.id, { response }, { new: true });
  return NextResponse.json(proposal);
}
