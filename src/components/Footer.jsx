import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-400 mt-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Easy
            <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Drive
            </span>
          </h2>
          <p className="text-sm">
            Premium cars, effortless rentals. Drive in style with full insurance, 
            doorstep delivery, and 24/7 support.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/cars" className="hover:text-blue-400 transition">
                Cars
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📍 123 Main Street, Your City</p>
          <p className="text-sm">📞 +1 (234) 567-890</p>
          <p className="text-sm">✉️ support@easydrive.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} EasyDrive. All rights reserved.
      </div>
    </footer>
  );
}
