import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/app/_lib/mongodb";
import Proposal from "@/app/_models/Proposal";
import nodemailer from "nodemailer";

// Email transport setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_PASS,
  },
});

export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const proposal = await Proposal.create(data);

  try {
    // Manually create the email HTML body
    const htmlBody = `
      <div>
        <h2>New Proposal Received</h2>
        <table border="1" style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr>
              <th style="padding: 8px; text-align: left;">Field</th>
              <th style="padding: 8px; text-align: left;">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 8px;"><strong>Name</strong></td>
              <td style="padding: 8px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Email</strong></td>
              <td style="padding: 8px;">${data.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Type</strong></td>
              <td style="padding: 8px;">${data.type}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Description</strong></td>
              <td style="padding: 8px;">${data.description}</td>
            </tr>
            <tr>
              <td style="padding: 8px;"><strong>Budget</strong></td>
              <td style="padding: 8px;">${data.budget}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    const mailOptions = {
      from: `WebWaleBhai <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: "New Proposal Received",
      html: htmlBody, // Direct HTML string
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  return NextResponse.json(proposal, { status: 201 });
}
