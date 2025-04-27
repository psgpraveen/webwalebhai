import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_lib/authOptions";
import ClientWrapper from "./ClientWrapper";
import { Proposal } from "@/app/_types/proposal";

export default async function ProposalsDashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Access denied</div>;

  const proposals: Proposal[] = await fetch("api/proposals", {
    credentials: "include"
  }).then(r => r.json());

  return <ClientWrapper proposals={proposals} />;
}
