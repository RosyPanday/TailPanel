import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner"; 
import { useAddProductMutation } from "./use-add-product-mutation.js";
import {
  addProductSchema,
  type AddProductInput,
  type AddProductOutput,
} from "../../schemas/add-product-schema.js";
import { useState } from "react";

export function useAddProducts() {
  const navigate = useNavigate();
  const addProductMutation = useAddProductMutation();
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    setError,
    reset,
    control,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<AddProductInput, any, AddProductOutput>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmitEvent: SubmitHandler<AddProductOutput> = async (data) => {
    try {
      console.log(data);
      await addProductMutation.mutateAsync(data);
      toast.success("Product added to database successfully. View products to view the new product");
      reset();
      navigate("/add-product");
    } catch (error) {
      setError("root", {
        message: "something is wrong",
      });
    }
  };

  return {
    register,
    handleSubmit,
    setError,
    errors,
    control,
    setValue,
    onSubmitEvent,
    previewImage,
    setPreviewImage,
    isPending: addProductMutation.isPending || isSubmitting,
  };
}
