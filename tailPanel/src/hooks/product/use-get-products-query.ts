import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import type { GetProductsResponse } from "../../types/product.js";

export function useGetProductsQuery() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.get<GetProductsResponse>(
        `${apiUrl}/product/get-products`,
      );
      return response.data;
    },
  });
}