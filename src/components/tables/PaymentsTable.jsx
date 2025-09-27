import Badge from "../ui/Badge";

export default function PaymentsTable({ data, onRowClick }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
      <table className="w-full text-left text-sm">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="pb-3">Payment ID</th>
            <th className="pb-3">Booking ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3">Date</th>
            <th className="pb-3">Amount</th>
            <th className="pb-3">Status</th>
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
              <td>{row.bookingId}</td>
              <td>{row.customer}</td>
              <td>{row.date}</td>
              <td>{row.amount}</td>
              <td><Badge status={row.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}