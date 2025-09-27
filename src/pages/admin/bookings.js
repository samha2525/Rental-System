import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import BookingsTable from "@/components/tables/BookingsTable";
import DetailDrawer from "@/components/ui/DetailDrawer";

export default function AdminBookings() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Page Header */}
      <PageHeader title="Bookings" subtitle="Manage all customer bookings" />

      {/* Bookings Table */}
      <section className="mt-8">
        <BookingsTable onViewDetails={handleViewDetails} />
      </section>

      {/* Drawer for booking details */}
      <DetailDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={selectedBooking}
      />
    </main>
  );
}
