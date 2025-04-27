"use client";

import { Proposal } from "@/app/_types/proposal";
import ProposalList from "@/app/_components/ProposalList";

interface Props {
  proposals: Proposal[];
}

export default function ClientWrapper({ proposals }: Props) {
  return <ProposalList initialData={proposals} />;
}
