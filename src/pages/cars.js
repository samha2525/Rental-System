import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

export default function Cars() {
  const router = useRouter();
  const [selectedCar, setSelectedCar] = useState(null);

  const cars = [
    {
      id: "car1",
      name: "Vigo",
      model: "2021",
      color: "Red",
      transmission: "Manual",
      category: "Pickup Truck",
      status: "Available",
      price: 120,
      image: "/Vigo.jpg",
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
      price: 250,
      image: "/v8_landCruiser.jpg",
      description: "Luxury and performance combined.",
    },
  ];

  const handleBookNow = (car) => {
    router.push(`/user/book?car=${car.name}`);
  };

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      {/* Cars Grid */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {cars.map((car) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl bg-gray-900 p-6 shadow-lg border border-white/10 hover:border-blue-500/40 transition cursor-pointer"
            onClick={() => setSelectedCar(car)}
          >
            <img
              src={car.image}
              alt={car.name}
              className="mb-4 h-48 w-full rounded-lg object-cover"
            />
            <h2 className="text-2xl font-bold">{car.name}</h2>
            <p className="text-gray-400">{car.model} • {car.transmission}</p>
            <p className="text-gray-400">{car.category}</p>
            <p className="mt-2 text-lg font-semibold text-blue-400">
              ${car.price}/day
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal for Car Details */}
      {selectedCar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl bg-gray-900 rounded-2xl p-8 shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <img
              src={selectedCar.image}
              alt={selectedCar.name}
              className="mb-6 w-full h-[300px] object-cover rounded-lg"
            />
            <h1 className="text-3xl font-bold mb-4">{selectedCar.name}</h1>
            <p className="text-gray-400 mb-6">{selectedCar.description}</p>

            <div className="grid grid-cols-2 gap-4 text-sm mb-6">
              <div><strong>Model:</strong> {selectedCar.model}</div>
              <div><strong>Color:</strong> {selectedCar.color}</div>
              <div><strong>Transmission:</strong> {selectedCar.transmission}</div>
              <div><strong>Category:</strong> {selectedCar.category}</div>
              <div><strong>Status:</strong> {selectedCar.status}</div>
              <div><strong>Price:</strong> ${selectedCar.price}/day</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleBookNow(selectedCar)}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90"
            >
              Book Now
            </motion.button>
          </motion.div>
        </div>
      )}
    </main>
  );
}
