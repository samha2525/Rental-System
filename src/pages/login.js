import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth();
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ role });
    role === "admin" ? router.push("/admin/dashboard") : router.push("/user/dashboard");
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-blue-600/40" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-fuchsia-600/40" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur"
      >
        <h1 className="text-3xl font-bold text-center mb-2">Welcome Back</h1>
        <p className="text-gray-400 text-center mb-8">
          Sign in to continue your journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90"
          >
            Sign In
          </motion.button>
        </form>

        <div className="flex items-center my-6">
          <div className="h-px flex-1 bg-white/10" />
          <span className="px-4 text-xs text-gray-500">OR</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SocialButton provider="Google" />
          <SocialButton provider="Apple" />
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
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
      className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-gray-200 hover:bg-white/10"
    >
      Continue with {provider}
    </motion.button>
  );
}
