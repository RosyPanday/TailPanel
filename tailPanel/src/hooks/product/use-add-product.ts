import { useForm, type SubmitHandler } from "react-hook-form";


import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useAddProductMutation } from "./use-add-product-mutation.js";
import { addProductSchema, type AddProductInput, type AddProductOutput } from "../../schemas/add-product-schema.js";

export function useAddProducts() {
  const navigate = useNavigate();
  const addProductMutation = useAddProductMutation();

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<AddProductInput, any, AddProductOutput>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmitEvent: SubmitHandler<AddProductOutput> = async (data) => {
    try {
      await addProductMutation.mutateAsync(data);
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
    onSubmitEvent,
  };
}