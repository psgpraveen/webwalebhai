import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/authOptions";
import ClientWrapper from "@/app/dashboard/feedback/ClientWrapper";
import { Feedback } from "@/app/_types/feedback";

export default async function AdminFeedbackPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Access denied</div>;

  const feedbacks: Feedback[] = await fetch(
    `/api/feedback?all=true`,
    { credentials: "include" }
  ).then((r) => r.json());

  return <ClientWrapper feedbacks={feedbacks} />;
}
