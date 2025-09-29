export default function CarsTable({ data = [], onRowClick, showActions = false }) {
  const cars = data.length
    ? data
    : [
        { id: "C001", model: "Toyota Corolla", category: "Sedan", status: "Available", price: "$40/day" },
        { id: "C002", model: "Honda Civic", category: "Sedan", status: "Unavailable", price: "$45/day" },
        { id: "C003", model: "Tesla Model 3", category: "Electric", status: "Available", price: "$100/day" },
        { id: "C004", model: "BMW X5", category: "SUV", status: "Maintenance", price: "$120/day" },
      ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 overflow-x-auto">
      <table className="w-full text-left text-sm min-w-[500px]">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="pb-3">ID</th>
            <th className="pb-3">Model</th>
            <th className="pb-3 hidden sm:table-cell">Category</th>
            <th className="pb-3">Status</th>
            <th className="pb-3 hidden md:table-cell">Price</th>
            {showActions && <th className="pb-3 hidden lg:table-cell">Actions</th>}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {cars.map((car) => (
            <tr
              key={car.id}
              className="hover:bg-white/5 transition cursor-pointer"
              onClick={() => onRowClick?.(car)}
            >
              <td className="py-3">{car.id}</td>
              <td>{car.model}</td>
              <td className="hidden sm:table-cell">{car.category}</td>
              <td>{car.status}</td>
              <td className="hidden md:table-cell">{car.price}</td>
              {showActions && (
                <td className="hidden lg:table-cell">
                  <button className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-xs">
                    Edit
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
