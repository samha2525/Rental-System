import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import PaymentsTable from "@/components/tables/PaymentsTable";
import DetailDrawer from "@/components/ui/DetailDrawer";

export default function AdminPayments() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Page Header */}
      <PageHeader title="Payments" subtitle="Manage and track payments" />

      {/* Payments Table */}
      <section className="mt-8">
        <PaymentsTable onViewDetails={handleViewDetails} />
      </section>

      {/* Drawer for payment details */}
      <DetailDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={selectedPayment}
      />
    </main>
  );
}
