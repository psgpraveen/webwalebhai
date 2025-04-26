import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/mongodb";
import Proposal from "@/app/_models/Proposal";
import { Resend } from "resend";
import ProposalEmailTemplate from "@/app/_components/ProposalEmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const proposal = await Proposal.create(data);

  // Send email to admin
  await resend.emails.send({
    from: "noreply@webwalebhai.com",
    to: process.env.ADMIN_EMAIL!,
    subject: "New Proposal Received",
    react: ProposalEmailTemplate(data),
  });

  return NextResponse.json(proposal, { status: 201 });
}

export async function GET() {
  await dbConnect();
  const proposals = await Proposal.find().sort({ createdAt: -1 });
  return NextResponse.json(proposals);
}
