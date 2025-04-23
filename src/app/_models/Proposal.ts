import mongoose, { Schema, Document, models } from "mongoose";

export interface IProposal extends Document {
  name: string;
  email: string;
  type: string;
  description: string;
  budget: string;
  createdAt: Date;
  response?: string;
}

const ProposalSchema = new Schema<IProposal>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  response: { type: String },
});

export default models.Proposal || mongoose.model<IProposal>("Proposal", ProposalSchema);
