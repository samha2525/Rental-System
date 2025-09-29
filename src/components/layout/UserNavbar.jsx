import Link from "next/link";

export default function UserNavbar() {
  return (
    <nav
      id="navbar"
      className="flex items-center justify-between bg-gray-900 px-8 py-4 text-white shadow-md"
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        <Link href="/user/dashboard">User Panel</Link>
      </div>

      {/* Links */}
      <div className="flex gap-6">
        <Link href="/user/dashboard" className="hover:text-blue-400">
          Dashboard
        </Link>
        <Link href="/user/bookings" className="hover:text-blue-400">
          Bookings
        </Link>
        <Link href="/user/profile" className="hover:text-blue-400">
          Profile
        </Link>
        <Link href="/user/book" className="hover:text-blue-400">
          Book a Car
        </Link>
      </div>
    </nav>
  );
}
