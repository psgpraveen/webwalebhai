export interface Proposal {
  _id?: string;
  name: string;
  email: string;
  type: string;
  description: string;
  budget: string;
  createdAt?: string;
  response?: string;
}
