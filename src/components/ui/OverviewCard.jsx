import { motion } from "framer-motion";

export default function OverviewCard({ label, value, color }) {
  const colorMap = {
    green: "text-green-400 bg-green-500/20",
    blue: "text-blue-400 bg-blue-500/20",
    yellow: "text-yellow-400 bg-yellow-500/20",
    pink: "text-pink-400 bg-pink-500/20",
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur flex flex-col items-center"
    >
      <div className={`text-3xl font-bold ${colorMap[color]}`}>{value}</div>
      <div className="text-gray-300 text-sm">{label}</div>
    </motion.div>
  );
}