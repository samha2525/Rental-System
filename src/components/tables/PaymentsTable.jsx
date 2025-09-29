import Badge from "../ui/Badge";

export default function PaymentsTable({ data = [], onRowClick }) {
  const payments = data.length
    ? data
    : [
        { id: "P001", bookingId: "B001", customer: "John Doe", date: "2025-09-15", amount: "$120", status: "Completed" },
        { id: "P002", bookingId: "B002", customer: "Jane Smith", date: "2025-09-16", amount: "$250", status: "Pending" },
        { id: "P003", bookingId: "B003", customer: "Ali Khan", date: "2025-09-18", amount: "$90", status: "Failed" },
        { id: "P004", bookingId: "B004", customer: "Maria Lopez", date: "2025-09-20", amount: "$300", status: "Completed" },
      ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-x-auto">
      <table className="w-full text-left text-sm min-w-[600px]">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="pb-3">Payment ID</th>
            <th className="pb-3">Booking ID</th>
            <th className="pb-3">Customer</th>
            <th className="pb-3 hidden sm:table-cell">Date</th>
            <th className="pb-3 hidden md:table-cell">Amount</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {payments.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-white/5 transition cursor-pointer"
              onClick={() => onRowClick?.(row)}
            >
              <td className="py-3">{row.id}</td>
              <td>{row.bookingId}</td>
              <td>{row.customer}</td>
              <td className="hidden sm:table-cell">{row.date}</td>
              <td className="hidden md:table-cell">{row.amount}</td>
              <td><Badge status={row.status} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
