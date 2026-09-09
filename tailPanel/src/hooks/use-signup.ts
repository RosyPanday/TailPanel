import { useForm, type SubmitHandler } from "react-hook-form";

import { signupSchema, type FormFields } from "../schemas/signup-schema.js";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmitEvent: SubmitHandler<FormFields> = (data) => {
    try {
      navigate("/dashboard");
      // throw new Error("kdshg");
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
    onSubmitEvent
  };
}
