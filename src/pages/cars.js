import { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Cars() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const cars = [
    {
      id: "car1",
      name: "Vigo",
      model: "2021",
      color: "Red",
      transmission: "Manual",
      category: "Pickup Truck",
      status: "Available",
      price: "$120/day",
      image: "/Vigo.jpg", // moved to /public
      description: "Reliable and powerful pickup truck.",
    },
    {
      id: "car2",
      name: "Land Cruiser",
      model: "2022",
      color: "Black",
      transmission: "Automatic",
      category: "SUV",
      status: "Available",
      price: "$250/day",
      image: "/v8_landCruiser.jpg", // moved to /public
      description: "Luxury and performance combined.",
    },
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center text-4xl font-bold md:text-6xl"
      >
        Available Cars
      </motion.h1>

      {/* Date Pickers */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-6">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="Start Date"
          className="rounded-md bg-gray-800 p-3"
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          placeholderText="End Date"
          className="rounded-md bg-gray-800 p-3"
        />
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {cars.map((car) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-gray-900 p-6 shadow-lg"
          >
            <img
              src={car.image}
              alt={car.name}
              className="mb-4 h-48 w-full rounded-md object-cover"
            />
            <h2 className="text-2xl font-semibold">{car.name}</h2>
            <p className="text-gray-400">{car.model} • {car.transmission}</p>
            <p className="text-gray-400">{car.category}</p>
            <p className="mt-2 text-lg font-bold">{car.price}</p>
            <p className="mt-2 text-sm">{car.description}</p>
            <button className="mt-4 w-full rounded-md bg-blue-600 py-2 font-semibold hover:bg-blue-700">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
