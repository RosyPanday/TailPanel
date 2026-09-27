import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { AddProductOutput } from "../../schemas/add-product-schema.js";

export function useAddProductMutation() {
  return useMutation({
    mutationFn: async (data: AddProductOutput) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("sku", data.sku);
      formData.append("category", data.category);
      formData.append("description", data.description);
      formData.append("price", String(data.price));
      formData.append("quantity", String(data.quantity));
      formData.append("status", data.status);
      formData.append("supplier", data.supplier);

      if (data.image) {
        formData.append("image", data.image);
      }
      const apiUrl = import.meta.env.VITE_BACKEND_URL;
      const response = await axios.post(
        `${apiUrl}/product/add-product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return response.data;
    },
  });
}