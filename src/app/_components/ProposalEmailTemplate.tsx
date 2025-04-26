import * as React from "react";
import { Proposal } from "@/app/_types/proposal";

export default function ProposalEmailTemplate(props: Proposal) {
  return (
    <div>
      <h2>New Proposal Received</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", textAlign: "left" }}>Field</th>
            <th style={{ padding: "8px", textAlign: "left" }}>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: "8px" }}><strong>Name</strong></td>
            <td style={{ padding: "8px" }}>{props.name}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}><strong>Email</strong></td>
            <td style={{ padding: "8px" }}>{props.email}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}><strong>Type</strong></td>
            <td style={{ padding: "8px" }}>{props.type}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}><strong>Description</strong></td>
            <td style={{ padding: "8px" }}>{props.description}</td>
          </tr>
          <tr>
            <td style={{ padding: "8px" }}><strong>Budget</strong></td>
            <td style={{ padding: "8px" }}>{props.budget}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
