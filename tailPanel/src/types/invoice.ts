export interface InvoiceInterface {
  id: number;
  customerName: string;
  email: string;
  address?: string | null;
  location?: string | null;
  phoneNumber?: string | null;
  description: string;
  quantity: number;
  rate: number;
  amount: number;
  notes?: string | null;
  issuedDate: Date;
  dueDate: Date;
  total: number;
}

export interface GetInvoicesResponse {
  message: string;
  invoices: InvoiceInterface[];
}