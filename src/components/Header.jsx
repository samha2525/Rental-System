import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-white fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Easy
          <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Drive
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/cars" className="hover:text-blue-400 transition">
            Cars
          </Link>
          <Link href="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Gradient Outline Login */}
          <Link
            href="/login"
            className="relative inline-block rounded-lg p-[1px] bg-gradient-to-r from-blue-500 to-fuchsia-500"
          >
            <span className="block px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition">
              Login
            </span>
          </Link>

          {/* Gradient Outline Sign Up */}
          <Link
            href="/signup"
            className="relative inline-block rounded-lg p-[1px] bg-gradient-to-r from-blue-500 to-fuchsia-500"
          >
            <span className="block px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-900 transition">
              Sign Up
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
