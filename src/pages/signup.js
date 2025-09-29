import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SignUpPage() {
  const [offset, setOffset] = useState(96);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setOffset(navbar.offsetHeight + 32);
    }
  }, []);

  return (
    <main
      className="relative min-h-screen flex items-start justify-center bg-black text-white overflow-hidden"
      style={{ paddingTop: offset }}
    >
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-blue-600/40" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-fuchsia-600/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-xl p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl"
      >
        <h1 className="text-4xl font-extrabold text-center mb-3">Create Account</h1>
        <p className="text-gray-400 text-center mb-10 text-lg">
          Join{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">
            EasyDrive
          </span>{" "}
          and start your journey today
        </p>

        {/* Form */}
        <form className="space-y-7">
          <Input label="Full Name" type="text" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Confirm Password" type="password" placeholder="••••••••" />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-5 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8">
          <div className="h-px flex-1 bg-white/10" />
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-5">
          <SocialButton provider="Google" />
          <SocialButton provider="Apple" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Already have an account?{" "}
          <Link href="/login" className="text-fuchsia-400 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>
    </main>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input
        {...props}
        className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function SocialButton({ provider }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-gray-200 hover:bg-white/10"
    >
      Continue with {provider}
    </motion.button>
  );
}
