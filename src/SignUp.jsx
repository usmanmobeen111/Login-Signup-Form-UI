import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SignUp = ({ setIsLogin }) => {
  const stateHandler = () => {
    setIsLogin(true);
  }
  
  return (
    <div className="w-[90vw] md:w-[30vw] min-h-[100vh] mx-auto flex flex-col justify-center items-center px-4">
      <h1 className="font-extrabold text-2xl font-roboto bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text mb-4">
        Sign Up
      </h1>

      <form className="w-full space-y-3">
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="confirmPassword" className="text-sm text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            className="p-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="hover:cursor-pointer w-full py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium text-sm hover:opacity-90 transition-all"
        >
          Sign Up
        </button>
      </form>

      <div className="w-full mt-5 flex items-center justify-center gap-2 text-gray-500 text-xs">
        <span className="w-1/4 h-[1px] bg-gray-300" />
        <span>or sign up with</span>
        <span className="w-1/4 h-[1px] bg-gray-300" />
      </div>

      <div className="mt-3 flex flex-col md:flex-row items-center justify-center gap-3 w-full">
        <button className="hover:cursor-pointer w-full flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
          <FcGoogle size={20} />
          <span className="font-medium text-sm text-gray-700">Google</span>
        </button>

        <button className="hover:cursor-pointer w-full flex items-center justify-center gap-2 py-2 px-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition-all">
          <FaGithub size={18} className="text-black" />
          <span className="font-medium text-sm text-gray-700">GitHub</span>
        </button>
      </div>
      <p className="block md:hidden my-4 text-sm text-gray-500">Already have an account? <span className="text-sm text-primary cursor-pointer" onClick={stateHandler}>Login</span></p>
    </div>
  );
};

export default SignUp;
