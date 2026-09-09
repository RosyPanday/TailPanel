import { useSignup } from "../../../hooks/use-signup.js";

const SignupContent = () => {

  const { register, handleSubmit,onSubmitEvent, errors } = useSignup();

  return (
    <div className="flex bg-white w-lg justify-center rounded-lg ">
      <form
        onSubmit={handleSubmit(onSubmitEvent)}
        className="flex flex-1 flex-col m-5 gap-3"
      >
        <div className="bg-blue-400 rounded-lg p-3 text-white font-bold text-lg justify-center">
          Sign Up to Tailpanel
        </div>
        {/* full name */}
        <div className="flex flex-col  ">
          <span className="text-blue-700">Full Name</span>
          <input
            className="bg-gray-50 rounded-lg p-2 text-gray-600"
            {...register("fullName")}
            type="text"
            placeholder="Full Name"
          />
        </div>
        {/* email address */}
        <span className="text-blue-700">Email Address</span>
        <input
          className="bg-gray-50 rounded-lg p-2 text-gray-600"
          {...register("email")}
          type="text"
          placeholder="Email Address"
        />
        {errors.email && <div className="text-red-600">{errors.email.message}</div>}
        {/* password */}
        <span className="text-blue-700">Password</span>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        {errors.password && <div className="text-red-600">{errors.password.message}</div>}

        <button
          type="submit"
          className="bg-blue-400 rounded-lg p-3 text-white font-bold"
        >
          {" "}
          Submit
        </button>
        {errors.root && <div className="text-red-600"> {errors.root.message}</div>}
      </form>
    </div>
  );
};

export default SignupContent;
