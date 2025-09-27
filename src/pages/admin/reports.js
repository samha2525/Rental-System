import PageHeader from "@/components/layout/PageHeader";
import RevenueTrendChart from "@/components/charts/RevenueTrendChart";
import FleetUtilizationChart from "@/components/charts/FleetUtilizationChart";

export default function AdminReports() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Page Header */}
      <PageHeader title="Reports" subtitle="System reports and analytics" />

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
  );
}
