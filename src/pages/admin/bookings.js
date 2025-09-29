import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import BookingsTable from "@/components/tables/BookingsTable";
import DetailDrawer from "@/components/ui/DetailDrawer";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, X } from "lucide-react";

export default function AdminBookings() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
    setDrawerOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Mobile Header with Hamburger */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <PageHeader title="Bookings" subtitle="Manage all customer bookings" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <PageHeader title="Bookings" subtitle="Manage all customer bookings" />
        </div>

        {/* Bookings Table */}
        <section className="mt-8">
          <BookingsTable onRowClick={handleViewDetails} />
        </section>

        {/* Drawer for booking details */}
        {drawerOpen && (
          <DetailDrawer
            title="Booking Details"
            data={selectedBooking}   // ✅ pass full object instead of rows
            onClose={() => setDrawerOpen(false)}
          />
        )}
      </main>
    </div>
  );
}
