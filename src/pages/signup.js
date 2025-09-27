import React, { Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Environment } from "@react-three/drei";
import * as THREE from "three";

function CarPreview() {
  const { scene } = useGLTF("/models/car.glb");
  return (
    <primitive object={scene} scale={0.65} position={[0, -0.5, 0]} rotation={[0, Math.PI / 6, 0]} />
  );
}

function Loader() {
  return (
    <Html center>
      <div className="px-3 py-1 rounded-md bg-white/10 text-white text-xs backdrop-blur">
        Loading Car…
      </div>
    </Html>
  );
}

export default function SignUpPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-blue-600/40" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-30 bg-fuchsia-600/40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-full max-w-md p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-xl"
      >
        {/* 3D Car */}
        <section className="flex items-center justify-center">
  <div className="w-[520px] md:w-[620px]">
    <CarHero3D />
  </div>
</section>

        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-gray-400 text-center mb-8">Join EasyDrive and start your journey</p>

        <form className="space-y-6">
          <Input label="Full Name" type="text" placeholder="John Doe" />
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Input label="Confirm Password" type="password" placeholder="••••••••" />

          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:opacity-90">
            Sign Up
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
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Login
          </a>
        </p>
      </motion.div>
    </main>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="block text-sm mb-2">{label}</label>
      <input {...props} className="w-full rounded-xl bg-black/40 border border-white/15 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  );
}

function SocialButton({ provider }) {
  return (
    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-gray-200 hover:bg-white/10">
      Continue with {provider}
    </motion.button>
  );
}
