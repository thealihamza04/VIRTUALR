import React from "react";
import Footer from "../components/Footer.jsx";

const SignInPage = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Sign In
        </h1>
        <p className="mt-10 text-center text-lg text-neutral-500 max-w-4xl mx-auto">
          Welcome back! Please sign in to your account.
        </p>
        <form className="mt-12 w-full max-w-md">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-neutral-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-neutral-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md text-white font-medium hover:bg-gradient-to-l"
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default SignInPage;
