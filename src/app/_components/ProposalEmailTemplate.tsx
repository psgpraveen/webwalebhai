import * as React from "react";
import { Proposal } from "@/app/_types/proposal";

export default function ProposalEmailTemplate(props: Proposal) {
  return (
    <div>
      <h2>New Proposal Received</h2>
      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>Email:</strong> {props.email}</p>
      <p><strong>Type:</strong> {props.type}</p>
      <p><strong>Description:</strong> {props.description}</p>
      <p><strong>Budget:</strong> {props.budget}</p>
    </div>
  );
}
