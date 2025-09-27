
export default function Badge({ status }) {
  const styles = {
    Completed: "bg-green-500/20 text-green-400",
    Ongoing: "bg-blue-500/20 text-blue-400",
    Cancelled: "bg-pink-500/20 text-pink-400",
    Active: "bg-green-500/20 text-green-400",
    Inactive: "bg-gray-500/20 text-gray-400",
    Pending: "bg-yellow-500/20 text-yellow-400",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs ${styles[status] || "bg-white/10 text-gray-300"}`}
    >
      {status}
    </span>
  );
}