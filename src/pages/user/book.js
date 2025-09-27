import { useState } from "react";
import UserNavbar from "@/components/layout/UserNavbar";

export default function BookCar() {
  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    date: "",
    car: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", form);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <UserNavbar />

      {/* Booking Form */}
      <section className="flex items-center justify-center p-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-lg space-y-6 rounded-lg bg-gray-900 p-8 shadow-lg"
        >
          <h1 className="mb-6 text-2xl font-bold">Book a Car</h1>

          <div>
            <label className="block text-sm font-medium">Pickup Location</label>
            <input
              type="text"
              name="pickup"
              value={form.pickup}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-gray-800 p-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Dropoff Location</label>
            <input
              type="text"
              name="dropoff"
              value={form.dropoff}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-gray-800 p-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-gray-800 p-3"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Car</label>
            <input
              type="text"
              name="car"
              value={form.car}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-gray-800 p-3"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 font-semibold hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </form>
      </section>
    </main>
  );
}
