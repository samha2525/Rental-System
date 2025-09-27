import PageHeader from "@/components/layout/PageHeader";
import StatCard from "@/components/ui/StatCard";
import RevenueTrendChart from "@/components/charts/RevenueTrendChart";
import CustomerGrowthChart from "@/components/charts/CustomerGrowthChart";
import FleetUtilizationChart from "@/components/charts/FleetUtilizationChart";

export default function AdminDashboard() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Page Header */}
      <PageHeader title="Admin Dashboard" subtitle="Overview of system stats" />

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
  );
}
