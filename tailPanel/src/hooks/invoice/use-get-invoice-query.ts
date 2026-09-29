import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetInvoicesResponse } from "../../types/invoice.js";

export function useGetInvoicesQuery() {
  return useQuery({
    queryKey: ["invoices"],
    queryFn: async () => {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get<GetInvoicesResponse>(
        `${apiUrl}/invoice/get-invoices`,
      );
      return response.data;
    },
  });
}