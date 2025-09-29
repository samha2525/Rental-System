import { motion } from "framer-motion";

export default function DetailDrawer({ title = "Details", rows = [], data = null, onClose }) {
  // 🔄 If "data" is passed, auto-convert it into rows
  const parsedRows =
    data && typeof data === "object"
      ? Object.entries(data).map(([key, value]) => ({
          label: formatLabel(key),
          value: String(value),
        }))
      : rows;

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "tween" }}
      className="w-96 bg-black/95 border-l border-white/10 p-6 fixed right-0 top-0 h-full z-20"
    >
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {parsedRows && parsedRows.length > 0 ? (
        parsedRows.map((row, idx) => (
          <div
            key={idx}
            className="flex justify-between py-2 border-b border-white/10 text-sm"
          >
            <span className="text-gray-400">{row.label}</span>
            <span className="font-medium">{row.value}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-400 text-sm">No details available.</p>
      )}

      <button
        onClick={onClose}
        className="mt-8 w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 font-semibold"
      >
        Close
      </button>
    </motion.div>
  );
}

// 🔧 Helper to prettify keys (e.g., bookingId -> Booking ID)
function formatLabel(key) {
  return key
    .replace(/([A-Z])/g, " $1") // split camelCase
    .replace(/^./, (str) => str.toUpperCase()); // capitalize first letter
}
