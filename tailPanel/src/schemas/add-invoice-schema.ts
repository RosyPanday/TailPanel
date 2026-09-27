import z from "zod";

export const addInvoiceSchema = z
  .object({
    customerName: z.string().min(5),
    email: z.email(),
    address: z.preprocess(
      (value) => (value === "" ? undefined : value),
      z.string().min(4).optional(),
    ),
    location: z.preprocess(
      (value) => (value === "" ? undefined : value),
      z.string().min(4).optional(),
    ),
    phoneNumber: z.preprocess(
      (value) => (value === "" ? undefined : value),
      z.string().min(10).optional(),
    ),
    description: z.string().min(5),
    quantity: z.coerce.number().min(1).max(1000),
    rate: z.coerce.number().min(1).max(20000),
    notes: z.preprocess(
      (value) => (value === "" ? undefined : value),
      z.string().min(4).optional(),
    ),
    issuedDate: z.coerce.date(),
    dueDate: z.coerce.date(),
  })
  .refine((data) => data.dueDate >= data.issuedDate, {
    message: "Due date must be equal to or after the issued date",
    path: ["dueDate"],
  });

export type AddInvoiceInput = z.input<typeof addInvoiceSchema>;

export type AddInvoiceOutput = z.output<typeof addInvoiceSchema>;