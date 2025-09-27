// src/components/CarHero3D.jsx
import Image from "next/image";
import { motion } from "framer-motion";

export default function CarHero3D() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full"
    >
      {/* Wrapper controls size; tweak these widths to match your screenshot scale */}
      <div className="mx-auto w-[600px] md:w-[800px] lg:w-[900px]">
        <Image
  src="/assets/hero-car.png"
  alt="Toyota Hilux"
  width={1700}
  height={900}
  priority
  className="h-auto w-full object-contain"
/>

      </div>
    </motion.div>
  );
}
