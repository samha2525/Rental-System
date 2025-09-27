import { motion } from "framer-motion";

export default function StatCard({ label, value, trend }) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
    >
      <div className="text-sm text-gray-400">{label}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {trend && (
        <div
          className={`text-xs mt-1 ${
            trend.startsWith("-") ? "text-pink-400" : "text-green-400"
          }`}
        >
          {trend}
        </div>
      )}
    </motion.div>
  );
}