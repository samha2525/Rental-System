import Badge from "../ui/Badge";

export default function BookingsTable({ data = [], onRowClick, showActions = false }) {
  const bookings = data.length
    ? data
    : [
        { id: "B001", customer: "John Doe", car: "Toyota Corolla", date: "2025-09-15", status: "Confirmed", amount: "$120" },
        { id: "B002", customer: "Jane Smith", car: "Honda Civic", date: "2025-09-16", status: "Pending", amount: "$250" },
        { id: "B003", customer: "Ali Khan", car: "Tesla Model 3", date: "2025-09-18", status: "Cancelled", amount: "$90" },
        { id: "B004", customer: "Maria Lopez", car: "BMW X5", date: "2025-09-20", status: "Ongoing", amount: "$300" },
      ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-x-auto">
      <table className="w-full text-left text-sm min-w-[600px]">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="pb-3">Booking ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3 hidden sm:table-cell">Car</th>
            <th className="pb-3 hidden md:table-cell">Date</th>
            <th className="pb-3">Status</th>
            <th className="pb-3 hidden sm:table-cell">Amount</th>
            {showActions && <th className="pb-3 text-right hidden lg:table-cell">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {bookings.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-white/5 transition cursor-pointer"
              onClick={() => onRowClick?.(row)}
            >
              <td className="py-3">{row.id}</td>
              <td>{row.customer}</td>
              <td className="hidden sm:table-cell">{row.car}</td>
              <td className="hidden md:table-cell">{row.date}</td>
              <td><Badge status={row.status} /></td>
              <td className="hidden sm:table-cell">{row.amount}</td>
              {showActions && (
                <td className="text-right hidden lg:table-cell space-x-2">
                  {row.status === "Confirmed" || row.status === "Pending" ? (
                    <>
                      <button className="px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 font-semibold">Modify</button>
                      <button className="px-3 py-1 text-xs rounded-lg bg-pink-600/80 font-semibold">Cancel</button>
                    </>
                  ) : (
                    <span className="text-gray-400 text-xs">No Actions</span>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
