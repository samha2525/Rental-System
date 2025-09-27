import { useState } from "react";
import UserNavbar from "@/components/layout/UserNavbar";
import BookingsTable from "@/components/tables/BookingsTable";
import DetailDrawer from "@/components/ui/DetailDrawer";

export default function UserBookings() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <UserNavbar />

      {/* Page Content */}
      <section className="p-8">
        <h1 className="mb-6 text-2xl font-bold">My Bookings</h1>

        {/* Bookings Table */}
        <BookingsTable onViewDetails={handleViewDetails} />

        {/* Drawer for booking details */}
        <DetailDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          data={selectedBooking}
        />
      </section>
    </main>
  );
}
