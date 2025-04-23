export interface Feedback {
    _id?: string;
    name: string;
    email: string;
    message: string;
    response?: string;
    approved?: boolean;
    createdAt?: string;
  }
  