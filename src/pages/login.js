import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState("user");
  const [offset, setOffset] = useState(96); // default padding

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setOffset(navbar.offsetHeight + 32); // navbar height + 2rem
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "admin") {
      router.push("/admin/dashboard");
    } else {
      router.push("/user/dashboard");
    }
  };

  return (
    <main
      className="relative min-h-screen flex items-start justify-center bg-black text-white overflow-hidden"
      style={{ paddingTop: offset }}
    >
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-blue-600/40" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-fuchsia-600/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl"
      >
        <h1 className="text-4xl font-extrabold text-center mb-3">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-10 text-lg">
          Sign in to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-base text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl bg-black/40 border border-white/15 px-5 py-4 text-base text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-400 hover:underline">
              Forgot password?
            </a>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-5 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90"
          >
            Sign In
          </motion.button>
        </form>

        <div className="flex items-center my-8">
          <div className="h-px flex-1 bg-white/10" />
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-5">
          <SocialButton provider="Google" />
          <SocialButton provider="Apple" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-10">
          Don’t have an account?{" "}
          <a href="/signup" className="text-fuchsia-400 hover:underline">
            Sign up
          </a>
        </p>
      </motion.div>
    </main>
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
