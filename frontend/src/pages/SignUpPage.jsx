import { motion } from "framer-motion";
import Input from "../components/Input";
import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthMeter from "../components/PasswordStrengthMeter";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error states

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value && value.length < 3) {
      setNameError("Name must be at least 3 characters");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (value && !emailRegex.test(value)) {
      setEmailError("Invalid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const errors = [];

    if (value.length < 6) errors.push("At least 6 characters");
    if (!/[A-Z]/.test(value)) errors.push("Add uppercase letters");
    if (!/[a-z]/.test(value)) errors.push("Add lowercase letters");
    if (!/\d/.test(value)) errors.push("Add numbers");
    if (!/[^A-Za-z0-9]/.test(value)) errors.push("Add special character");

    setPasswordError(value && errors.join(", "));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop:filter backdrop:blur-xl rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="pl-8 pr-8 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
          Create Account
        </h2>

        <form onSubmit={handleSignUp}>
          <Input
            icon={User}
            label="Full Name"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={handleNameChange}
            error={nameError}
          />
          <Input
            icon={Mail}
            label="Email"
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <Input
            icon={Lock}
            label="Password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
          {/* Password strength meter */}
          {password && <PasswordStrengthMeter password={password} />}

          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition duration-200 "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
          >
            Sign Up
          </motion.button>
        </form>
      </div>

      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default SignUpPage;
