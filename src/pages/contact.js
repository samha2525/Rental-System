import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-extrabold mb-6 text-center"
      >
        Get in{" "}
        <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
          Touch
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-300 max-w-2xl text-center mb-12 leading-relaxed"
      >
        We’d love to hear from you. Whether it’s a query, feedback, or business
        inquiry — our team is here to help.
      </motion.p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl rounded-2xl border border-transparent bg-gray-900/90 p-10 shadow-xl
                   bg-clip-padding [background:linear-gradient(#111,#111)_padding-box,linear-gradient(to_right,#3b82f6,#d946ef)_border-box]"
      >
        <div className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-3 text-lg font-semibold text-white shadow-lg hover:opacity-90"
          >
            Send Message
          </motion.button>
        </div>
      </form>
    </main>
  );
}
