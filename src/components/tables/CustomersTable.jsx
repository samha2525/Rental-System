import Badge from "../ui/Badge";

export default function CustomersTable({ data = [], onRowClick }) {
  // Dummy fallback
  const customers = data.length
    ? data
    : [
        { id: "CU001", name: "John Doe", email: "john.doe@example.com", phone: "+1 555-1234", status: "Active" },
        { id: "CU002", name: "Jane Smith", email: "jane.smith@example.com", phone: "+1 555-5678", status: "Inactive" },
        { id: "CU003", name: "Ali Khan", email: "ali.khan@example.com", phone: "+92 300-1234567", status: "Active" },
        { id: "CU004", name: "Maria Lopez", email: "maria.lopez@example.com", phone: "+34 612-987654", status: "Pending" },
      ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-x-auto">
      <table className="w-full text-left text-sm min-w-[500px]">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="pb-3">Customer ID</th>
            <th className="pb-3">Name</th>
            <th className="pb-3 hidden sm:table-cell">Email</th>
            <th className="pb-3 hidden md:table-cell">Phone</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {customers.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-white/5 transition cursor-pointer"
              onClick={() => onRowClick?.(row)}
            >
              <td className="py-3">{row.id}</td>
              <td>{row.name}</td>
              <td className="hidden sm:table-cell">{row.email}</td>
              <td className="hidden md:table-cell">{row.phone}</td>
              <td>
                <Badge status={row.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
