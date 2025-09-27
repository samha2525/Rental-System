import { useRouter } from "next/router";
import UserNavbar from "@/components/layout/UserNavbar";
import KPIBox from "@/components/ui/KPIBox";
import Badge from "@/components/ui/Badge";

export default function UserDashboard() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <UserNavbar />

      {/* Dashboard Content */}
      <section className="p-8">
        <h1 className="mb-8 text-3xl font-bold">User Dashboard</h1>

        {/* KPI Stats */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <KPIBox title="Bookings" value="12" />
          <KPIBox title="Payments" value="5" />
          <KPIBox title="Active Cars" value="3" />
        </div>

        {/* Status Badges */}
        <div className="mt-10 flex gap-4">
          <Badge color="green">Active</Badge>
          <Badge color="yellow">Pending</Badge>
          <Badge color="red">Cancelled</Badge>
        </div>
      </section>
    </main>
  );
}
