import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import PaymentsTable from "@/components/tables/PaymentsTable";
import DetailDrawer from "@/components/ui/DetailDrawer";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, X } from "lucide-react";

export default function AdminPayments() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleRowClick = (payment) => {
    setSelectedPayment(payment);
    setDrawerOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar */}
      <AdminSidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        {/* Mobile Header */}
        <div className="flex items-center justify-between lg:hidden mb-6">
          <PageHeader title="Payments" subtitle="Track all transactions" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <PageHeader title="Payments" subtitle="Track all transactions" />
        </div>

        {/* Payments Table */}
        <section className="mt-8">
          <PaymentsTable onRowClick={handleRowClick} />
        </section>

        {/* Drawer */}
        {drawerOpen && (
          <DetailDrawer
            title="Payment Details"
            data={selectedPayment}
            onClose={() => setDrawerOpen(false)}
          />
        )}
      </main>
    </div>
  );
}
