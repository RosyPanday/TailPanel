import axios from "axios";
import type { AddInvoiceOutput } from "../schemas/add-invoice-schema.js";
import { useMutation } from "@tanstack/react-query";

export function useAddInvoiceMutation() {
  return useMutation({
    mutationFn: async (data: AddInvoiceOutput) => {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(`${apiUrl}/invoice/add-invoice`, data);
      return response.data;
    },
  });
}