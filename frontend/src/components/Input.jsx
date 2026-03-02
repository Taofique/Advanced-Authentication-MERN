import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({
  icon: Icon,
  label,
  error,
  isLoading,
  type,
  id,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = id || props.name || "input-field";
  const isPassword = type === "password";
  const actualType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-6 relative">
      <div className="relative w-full">
        {/* LEFT ICON */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center pl-3 pointer-events-none z-10">
          <Icon className="size-5 text-green-500" />
        </div>

        {/* INPUT */}
        <input
          id={inputId}
          type={actualType}
          value={value}
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
          disabled={isLoading}
          placeholder=" "
          autoComplete="new-password"
          {...props}
          className={`peer w-full pl-10 pr-10 pt-5 pb-2 bg-gray-800 bg-opacity-50 rounded-lg border 
            ${
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-700 focus:border-green-500 focus:ring-green-500"
            }
            focus:ring-2 text-white placeholder-transparent transition-all duration-200
            ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
        />

        {/* FLOATING LABEL — fixed with explicit top values */}
        {label && (
          <label
            htmlFor={inputId}
            className={`
              absolute left-10 pointer-events-none
              transition-all duration-200
              top-3.5 text-gray-400 text-base
              peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base
              peer-focus:top-1.5 peer-focus:text-gray-300 peer-focus:text-xs
              ${value ? "!top-1.5 !text-gray-300 !text-xs" : ""}
            `}
          >
            {label}
          </label>
        )}

        {/* PASSWORD TOGGLE */}
        {isPassword && value && (
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
            tabIndex={-1}
          >
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        )}

        {/* LOADING SPINNER */}
        {isLoading && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <div className="size-4 border-2 border-green-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* ERROR MESSAGE */}
      {error && (
        <p id={`${inputId}-error`} className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
