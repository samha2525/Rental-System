import Badge from "../ui/Badge";

export default function BookingsTable({ data, showActions = false, onRowClick }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <table className="w-full text-left text-sm">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="pb-3">Booking ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Car</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Amount</th>
            {showActions && <th className="pb-3 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {data.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-white/5 transition cursor-pointer"
              onClick={() => onRowClick?.(row)}
            >
              <td className="py-3">{row.id}</td>
              <td>{row.customer}</td>
              <td>{row.car}</td>
              <td>{row.date}</td>
              <td><Badge status={row.status} /></td>
              <td>{row.amount}</td>
              {showActions && (
                <td className="text-right space-x-2">
                  {row.status === "Confirmed" || row.status === "Pending" ? (
                    <>
                      <button className="px-3 py-1 text-xs rounded-lg bg-gradient-to-r from-blue-600 to-fuchsia-600 font-semibold">
                        Modify
                      </button>
                      <button className="px-3 py-1 text-xs rounded-lg bg-pink-600/80 font-semibold">
                        Cancel
                      </button>
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