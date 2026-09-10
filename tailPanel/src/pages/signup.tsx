import SignupContent from "../components/layout/signup/signup-content.js";
import signupSideImg from "../assets/images/side-image.png";

function Signup() {
  return (
    <div className="flex bg-gray-100 w-full h-screen p-5 gap-1">
      {/* Form Section */}
      <div className="flex flex-1 h-full overflow-y-auto">
        <SignupContent />
      </div>

      {/* Image Section */}
      <div className="hidden md:block md:w-1/2 md:h-screen md pb-6 ">
        <img
          src={signupSideImg}
          alt="Signup background"
          className="h-full w-full object-fill rounded-2xl"
        />
      </div>
    </div>
  );
}

export default Signup;