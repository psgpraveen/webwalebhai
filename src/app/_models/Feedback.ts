import mongoose, { Schema, Document, models } from "mongoose";

export interface IFeedback extends Document {
  name: string;
  email: string;
  message: string;
  response?: string;
  approved?: boolean;
  createdAt: Date;
}

const FeedbackSchema = new Schema<IFeedback>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  response: { type: String },
  approved: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
});

export default models.Feedback || mongoose.model<IFeedback>("Feedback", FeedbackSchema);
