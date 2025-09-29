import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import RevenueTrendChart from "@/components/charts/RevenueTrendChart";
import FleetUtilizationChart from "@/components/charts/FleetUtilizationChart";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, X } from "lucide-react";

export default function AdminReports() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Mobile Header with Hamburger */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <PageHeader title="Reports" subtitle="System reports and analytics" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <PageHeader title="Reports" subtitle="System reports and analytics" />
        </div>

        {/* Reports Grid */}
        <section className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Revenue Trend</h2>
            <RevenueTrendChart />
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
