import { useForm, type SubmitHandler } from "react-hook-form";

import {
  addProductSchema,
  type AddProductInput,
  type AddProductOutput,
} from "../schemas/add-product-schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function useAddProducts() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AddProductInput, any, AddProductOutput>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmitEvent: SubmitHandler<AddProductOutput> = (data) => {
    try {
      const navigate = useNavigate();
      navigate("/dashboard");
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