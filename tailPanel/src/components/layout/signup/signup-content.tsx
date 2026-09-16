import { User, Mail, Lock } from "lucide-react";

import { useSignup } from "../../../hooks/use-signup.js";
import honey from "../../../assets/icons/honey.svg";

const SignupContent = () => {
  const { register, handleSubmit, onSubmitEvent, errors } = useSignup();

  return (
    <div className="bg-white shadow-2xl w-full rounded-lg p-5">
      <div className="flex flex-col gap-5">
        {/* title */}
        <div className="flex gap-4 items-center">
          <div className="size-8">
            <img src={honey} />
          </div>
          <div className="font-bold text-xl ">Tailpanel</div>
        </div>
        {/* create your account */}
        <div className="flex gap-3">
          <div className="text-3xl font-bold">Create Your</div>
          <div className="text-3xl font-bold text-blue-600">Account</div>
        </div>
        {/* getstarted */}
        <div>
          <span className="text-sm text-gray-500">
            {" "}
            Get started with Tailpanel and view the admin dashbaord to manage
            your decision more efficiently.
          </span>
        </div>
        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmitEvent)}
          className="flex flex-col gap-5"
        >
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center ">
              <div>
                <User className="size-5 text-gray-800" />
              </div>
              <div className="text-gray-800"> Full Name</div>
            </div>
            <input
              className="px-4 py-2 rounded-lg bg-gray-100 xs:w-30"
              {...register("fullName")}
              type="text"
              placeholder="Full Name"
            />
            {errors.fullName && (
              <p className="text-red-600">{errors.fullName.message}</p>
            )}
          </div>

          {/* email */}

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center ">
              <div>
                <Mail className="size-5 text-gray-800" />
              </div>
              <div className="text-gray-800"> Email</div>
            </div>
            <input
              className="px-4 py-2 rounded-lg bg-gray-100"
              {...register("email")}
              type="text"
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* password */}

          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center ">
              <div>
                <Lock className="size-5 text-gray-800" />
              </div>
              <div className="text-gray-800"> Password</div>
            </div>
            <input
              className="px-4 py-2 rounded-lg bg-gray-100"
              {...register("password")}
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold text-lg rounded-lg py-3"
          >
            Submit
          </button>

          {errors.root && <p className="text-red-600">{errors.root.message}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignupContent;
