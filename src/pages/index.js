import React from "react";
import { motion } from "framer-motion";
import CarHero3D from "../components/CarHero3D.jsx";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col justify-center pt-[80px] sm:pt-[100px] lg:pt-[120px]">
      {/* Ambient gradient glows */}
      <div
        className="pointer-events-none absolute -top-[10vh] -left-[10vw] 
        h-[25vw] w-[25vw] sm:h-[30vw] sm:w-[30vw] lg:h-[35vw] lg:w-[35vw] 
        rounded-full blur-3xl opacity-25 bg-blue-600/40"
      />

      <div
        className="pointer-events-none absolute bottom-0 right-0 
        h-[22vw] w-[22vw] sm:h-[28vw] sm:w-[28vw] lg:h-[32vw] lg:w-[32vw] 
        rounded-full blur-3xl opacity-40 
        bg-gradient-to-t from-black via-fuchsia-600/30 to-transparent"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24">
        
        {/* Left side */}
        <section className="flex flex-col justify-center space-y-6 sm:space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
          >
            <span className="text-white">Drive</span>{" "}
            Luxury,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-fuchsia-400">
              Effortlessly
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0"
          >
            Premium cars, delivered to your door. Easy booking, real-time
            availability, and full insurance included.
          </motion.p>

          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-3 sm:gap-4"
          >
            <Badge>24/7 Roadside</Badge>
            <Badge>Fully Insured</Badge>
            <Badge>Free Cancellation</Badge>
            <Badge>Doorstep Delivery</Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="grid grid-cols-3 gap-4 sm:gap-6 max-w-xs sm:max-w-md mx-auto lg:mx-0"
          >
            <Stat kpi="4.8★" label="Avg Rating" />
            <Stat kpi="12k+" label="Happy Drivers" />
            <Stat kpi="120+" label="Cities Served" />
          </motion.div>
        </section>
{/* Right side */}
<section className="relative flex items-center justify-center mt-8 lg:mt-0">
  <motion.div
    className="
      relative flex items-center justify-center object-contain
      w-[clamp(80px,6vw,100px)]     /* tiny size */
      max-w-[35%]                   /* very restricted */
      h-auto
      max-h-[20vh] md:max-h-[24vh] lg:max-h-[28vh]
      ml-[-360px] lg:ml-[-420px]    /* nudged further inside */
    "
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <CarHero3D />
  </motion.div>
</section>

      </div>
    </main>
  );
}

function Badge({ children }) {
  return (
    <span className="relative inline-block rounded-full p-[1px] bg-gradient-to-r from-blue-500 to-fuchsia-500">
      <span className="block rounded-full bg-black px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-gray-200">
        {children}
      </span>
    </span>
  );
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4 md:p-5 text-center space-y-1 sm:space-y-2">
      <span className="inline-block rounded-lg p-[2px] bg-gradient-to-r from-blue-500 to-fuchsia-500">
        <span className="block px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-black text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
          {kpi}
        </span>
      </span>
      <div className="text-xs sm:text-sm text-gray-400">{label}</div>
    </div>
  );
}
