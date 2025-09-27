
export default function FilterButton({ icon, label }) {
  return (
    <button className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 hover:bg-white/10 transition">
      {icon}
      {label}
    </button>
  );
}