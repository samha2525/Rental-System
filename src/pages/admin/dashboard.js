import { useState } from "react";
import dynamic from "next/dynamic";
import PageHeader from "@/components/layout/PageHeader";
import StatCard from "@/components/ui/StatCard";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, X } from "lucide-react"; // if you prefer, swap to @heroicons/react

// ✅ Lazy-load heavy charts on the client to avoid OOM in SSR
const RevenueTrendChart = dynamic(
  () => import("@/components/charts/RevenueTrendChart"),
  { ssr: false }
);
const CustomerGrowthChart = dynamic(
  () => import("@/components/charts/CustomerGrowthChart"),
  { ssr: false }
);
const FleetUtilizationChart = dynamic(
  () => import("@/components/charts/FleetUtilizationChart"),
  { ssr: false }
);

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Mobile Navbar with Hamburger */}
        <div className="mb-6 flex items-center justify-between lg:hidden">
          <PageHeader title="Admin Dashboard" subtitle="Overview of system stats" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <PageHeader title="Admin Dashboard" subtitle="Overview of system stats" />
        </div>

        {/* KPI Stats */}
        <section className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <StatCard title="Revenue" value="$45,000" change="+12%" />
          <StatCard title="Bookings" value="1,245" change="+8%" />
          <StatCard title="Customers" value="3,210" change="+5%" />
        </section>

        {/* Charts */}
        <section className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Revenue Trend</h2>
            <RevenueTrendChart />
          </div>

          <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Customer Growth</h2>
            <CustomerGrowthChart />
          </div>

          <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Fleet Utilization</h2>
            <FleetUtilizationChart />
          </div>
        </section>
      </main>
    </div>
  );
}
