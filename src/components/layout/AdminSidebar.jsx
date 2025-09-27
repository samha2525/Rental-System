import Link from "next/link";

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 p-6 text-white">
      <h2 className="mb-8 text-xl font-bold">Admin Panel</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/admin/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/admin/bookings" className="hover:text-blue-400">
          Bookings
        </Link>
        <Link href="/admin/cars" className="hover:text-blue-400">
          Cars
        </Link>
        <Link href="/admin/customers" className="hover:text-blue-400">
          Customers
        </Link>
        <Link href="/admin/payments" className="hover:text-blue-400">
          Payments
        </Link>
        <Link href="/admin/reports" className="hover:text-blue-400">
          Reports
        </Link>
      </nav>
    </aside>
  );
}
