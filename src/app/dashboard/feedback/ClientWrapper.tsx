"use client";

import { Feedback } from "@/app/_types/feedback";
import FeedbackList from "@/app/_components/FeedbackList";

interface Props {
  feedbacks: Feedback[];
}

export default function ClientWrapper({ feedbacks }: Props) {
  return <FeedbackList initialData={feedbacks} />;
}
