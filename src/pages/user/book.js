import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react"; // for back arrow icon

export default function BookCar() {
  const router = useRouter();
  const { car } = router.query;

  const carPrices = {
    Vigo: 120,
    "Land Cruiser": 250,
  };

  const [form, setForm] = useState({
    pickup: "",
    dropoff: "",
    startDate: "",
    endDate: "",
    car: "",
    driverOption: "self",
    transmission: "automatic",
  });

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (car) {
      setForm((prev) => ({ ...prev, car }));
    }
  }, [car]);

  useEffect(() => {
    if (form.startDate && form.endDate && form.car) {
      const start = new Date(form.startDate);
      const end = new Date(form.endDate);
      const diffTime = end - start;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays > 0 && carPrices[form.car]) {
        setTotalPrice(diffDays * carPrices[form.car]);
      } else {
        setTotalPrice(0);
      }
    } else {
      setTotalPrice(0);
    }
  }, [form.startDate, form.endDate, form.car]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", form, "Total Price:", totalPrice);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-16 overflow-y-auto">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Logo */}
      <h1 className="mb-10 text-4xl font-extrabold">
        Easy
        <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
          Drive
        </span>
      </h1>

      {/* Booking Form */}
      <section className="w-full max-w-2xl">
        <form
          onSubmit={handleSubmit}
          className="w-full space-y-6 rounded-2xl border border-transparent bg-gray-900/90 p-10 shadow-xl
                     bg-clip-padding [background:linear-gradient(#111,#111)_padding-box,linear-gradient(to_right,#3b82f6,#d946ef)_border-box]"
        >
          <h2 className="mb-6 text-2xl font-bold">Book a Car</h2>

          {/* Pickup */}
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

          {/* Dropoff */}
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

          {/* Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-gray-800 p-3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium">End Date</label>
              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="mt-2 w-full rounded-md bg-gray-800 p-3"
                required
              />
            </div>
          </div>

          {/* Price Preview */}
          {totalPrice > 0 && (
            <div className="p-4 rounded-lg bg-gray-800 text-center">
              <p className="text-lg font-semibold text-blue-400">
                Total Price: ${totalPrice}
              </p>
              <p className="text-sm text-gray-400">
                ({form.car} @ ${carPrices[form.car]}/day)
              </p>
            </div>
          )}

          {/* Car (pre-filled) */}
          <div>
            <label className="block text-sm font-medium">Car</label>
            <input
              type="text"
              name="car"
              value={form.car}
              onChange={handleChange}
              readOnly
              className="mt-2 w-full rounded-md bg-gray-800 p-3 text-gray-400 cursor-not-allowed"
            />
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-sm font-medium">Transmission</label>
            <select
              name="transmission"
              value={form.transmission}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-gray-800 p-3"
            >
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
            </select>
          </div>

          {/* Driver Option */}
          <div>
            <label className="block text-sm font-medium">Driver Option</label>
            <select
              name="driverOption"
              value={form.driverOption}
              onChange={handleChange}
              className="mt-2 w-full rounded-md bg-gray-800 p-3"
            >
              <option value="self">Self-Drive</option>
              <option value="with">With Driver</option>
            </select>
          </div>

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-4 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90"
          >
            Confirm Booking
          </motion.button>
        </form>
      </section>
    </main>
  );
}
