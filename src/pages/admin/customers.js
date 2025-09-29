import { useState } from "react";
import PageHeader from "@/components/layout/PageHeader";
import CustomersTable from "@/components/tables/CustomersTable";
import DetailDrawer from "@/components/ui/DetailDrawer";
import AdminSidebar from "@/components/layout/AdminSidebar";
import { Menu, X } from "lucide-react";

export default function AdminCustomers() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleRowClick = (customer) => {
    setSelectedCustomer(customer);
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
          <PageHeader title="Customers" subtitle="Manage customer profiles" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block">
          <PageHeader title="Customers" subtitle="Manage customer profiles" />
        </div>

        {/* Customers Table */}
        <section className="mt-8">
          <CustomersTable onRowClick={handleRowClick} />
        </section>

        {/* Drawer */}
        {drawerOpen && (
          <DetailDrawer
            title="Customer Details"
            data={selectedCustomer}
            onClose={() => setDrawerOpen(false)}
          />
        )}
      </main>
    </div>
  );
}
