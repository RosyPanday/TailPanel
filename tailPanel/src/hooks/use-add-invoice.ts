import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  addInvoiceSchema,
  type AddInvoiceInput,
  type AddInvoiceOutput,
} from "../schemas/add-invoice-schema.js";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useAddInvoiceMutation } from "./use-add-invoice-mutation.js";

export function useAddInvoices() {
  const navigate = useNavigate();
  const addInvoiceMutation= useAddInvoiceMutation();
  //parameters given to useForm is input form state, form context, and submitted output data
  const {
    register,
    setError,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<AddInvoiceInput, any, AddInvoiceOutput>({
    resolver: zodResolver(addInvoiceSchema),
  });

  const onSubmitEvent: SubmitHandler<AddInvoiceOutput> = async (data) => {
    try {
      await addInvoiceMutation.mutateAsync(data);
      reset();
      navigate("/create-invoice");
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
    onSubmitEvent,
  };
}