import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import CarsTable from "@/components/tables/CarsTable";
import DetailDrawer from "@/components/ui/DetailDrawer";

export default function AdminCars() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleViewDetails = (car) => {
    setSelectedCar(car);
    setDrawerOpen(true);
  };

  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Page Header */}
      <PageHeader title="Cars" subtitle="Manage all cars in the system" />

      {/* Cars Table */}
      <section className="mt-8">
        <CarsTable onViewDetails={handleViewDetails} />
      </section>

      {/* Drawer for car details */}
      <DetailDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={selectedCar}
      />
    </main>
  );
}
