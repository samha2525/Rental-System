
export default function CarsTable({ data = [], onRowClick, showActions = false }) {
  if (!data.length) {
    return <p className="text-gray-400">No cars available</p>;
  }

  return (
    <table className="w-full mt-6 border border-white/10 rounded-xl overflow-hidden text-sm">
      <thead className="bg-white/10">
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Model</th>
          <th className="px-4 py-2 text-left">Category</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Price</th>
          {showActions && <th className="px-4 py-2 text-left">Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((car) => (
          <tr
            key={car.id}
            className="border-t border-white/10 hover:bg-white/5 cursor-pointer"
            onClick={() => onRowClick && onRowClick(car)}
          >
            <td className="px-4 py-2">{car.id}</td>
            <td className="px-4 py-2">{car.model}</td>
            <td className="px-4 py-2">{car.category}</td>
            <td className="px-4 py-2">{car.status}</td>
            <td className="px-4 py-2">{car.price}</td>
            {showActions && (
              <td className="px-4 py-2">
                <button className="px-3 py-1 rounded-md bg-blue-500 hover:bg-blue-600 text-xs">
                  Edit
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}