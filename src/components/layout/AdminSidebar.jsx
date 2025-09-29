import Link from "next/link";
import { LayoutDashboard, CalendarCheck, Car, Users, CreditCard, BarChart3 } from "lucide-react";

export default function AdminSidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 
        bg-gradient-to-b from-black via-gray-900 to-black
        border-r border-white/10
        p-6 text-white transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0 lg:static lg:flex-shrink-0 shadow-xl`}
      >
        {/* Brand / Title */}
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold tracking-tight">
            <span className="text-white">Easy</span>
            <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Admin
            </span>
          </h2>
          <p className="text-xs text-gray-400 mt-1">Control Center</p>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-3 text-sm font-medium">
          <NavItem href="/admin/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" setIsOpen={setIsOpen} />
          <NavItem href="/admin/bookings" icon={<CalendarCheck size={18} />} label="Bookings" setIsOpen={setIsOpen} />
          <NavItem href="/admin/cars" icon={<Car size={18} />} label="Cars" setIsOpen={setIsOpen} />
          <NavItem href="/admin/customers" icon={<Users size={18} />} label="Customers" setIsOpen={setIsOpen} />
          <NavItem href="/admin/payments" icon={<CreditCard size={18} />} label="Payments" setIsOpen={setIsOpen} />
          <NavItem href="/admin/reports" icon={<BarChart3 size={18} />} label="Reports" setIsOpen={setIsOpen} />
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} EasyDrive <br />
            <span className="text-gray-500">Admin Panel</span>
          </div>
        </div>
      </aside>
    </>
  );
}

function NavItem({ href, icon, label, setIsOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className="flex items-center gap-3 rounded-lg px-3 py-2 
        hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-fuchsia-500/20
        hover:text-white transition"
    >
      <span className="text-gray-400 group-hover:text-white">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
