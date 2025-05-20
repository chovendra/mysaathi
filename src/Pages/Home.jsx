import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Form ki state
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  // Register button
  const handleRegister = () => {
    if (!fullName || !phone || !email || !password || !agreed) {
      alert("Please fill all fields and accept terms.");
      return;
    }
    navigate("/pd");
  };

  const slides = [
    {
      id: 1,
      image: "/images/boy.jpg",
      title: "Find love beautifully where stories turn into journeys...",
      subtitle:
        "Find your perfect match and begin a beautiful chapter of love together.",
    },
  ];

  const [currentSlide] = useState(0);

  const formValid =
    fullName.trim() !== "" &&
    phone.trim().length === 10 &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    agreed;

  return (
    <div className="relative w-full h-[100vh] overflow-hidden bg-gray-600">
      {/* Background ki image with blue radient */}
      <div
        className="absolute w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transform: "scaleX(-1)",
          backgroundPosition: "center 10%",
        }}
      >
        <div className="absolute w-full h-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-45"></div>
      </div>

      {/* Main_wrapper */}
      <>
        <div className="w-full h-[60px]" />
        <div className="max-w-screen-xl mx-auto px-5 lg:px-0 max-h">
          <div className="relative z-10 flex flex-col lg:flex-row flex-wrap items-center justify-start h-full px-5 lg:px-10 py-10 gap-y-6">

            {/* Left_text_section */}
            <div className="lg:w-1/2 w-full text-left lg:mb-0 lg:pl-5">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                {slides[currentSlide].title}
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-white">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Extra_gap */}
            <div className="hidden lg:block w-32"></div>

            {/* Right register form */}
            <div className="lg:w-[420px] w-full bg-white rounded-xl p-6 text-gray-800 mb-10 lg:mt-20">
              <h2 className="text-xl font-bold text-center mb-2">
                Register, It’s FREE!
              </h2>

              {/* Full name */}
              <label className="block mb-1 font-medium text-sm">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D53269] text-sm"
              />

              {/* Phone number */}
              <label className="block mb-1 font-medium text-sm">
                Phone Number
              </label>
              <div className="flex mb-3">
                <input
                  type="text"
                  value="+91"
                  disabled
                  className="w-10 p-2 border border-gray-300 rounded bg-gray-100 text-center text-sm"
                />
                <input
                  type="text"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Enter your number"
                  className="flex-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D53269] text-sm"
                />
              </div>

              {/* Email */}
              <label className="block mb-1 font-medium text-sm">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D53269] text-sm"
              />

              {/* Password */}
              <label className="block mb-1 font-medium text-sm">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full mb-3 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#D53269] text-sm"
              />

              {/* Terms and conditions */}
              <div className="flex items-start mb-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 mr-2"
                />
                <label htmlFor="terms" className="text-xs leading-tight">
                  By clicking you agree to our{" "}
                  <span className="text-blue-600 font-medium">
                    terms and conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-blue-600 font-medium">
                    privacy policies
                  </span>
                  .
                </label>
              </div>

              {/* Register button */}
              <button
                onClick={() => navigate("/pd")}
                disabled={!formValid}
                className={`w-full py-2 rounded mb-2 text-sm font-medium ${
                  formValid
                    ? "bg-blue-900 text-white hover:bg-blue-600 transition"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Register
              </button>

              {/* Already have an account */}
              <p className="text-center text-xs">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 font-medium">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Home;
