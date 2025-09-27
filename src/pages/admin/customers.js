import PageHeader from "@/components/layout/PageHeader";
import CustomersTable from "@/components/tables/CustomersTable";

export default function AdminCustomers() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      {/* Page Header */}
      <PageHeader title="Customers" subtitle="Manage customer information" />

      {/* Customers Table */}
      <section className="mt-8">
        <CustomersTable />
      </section>
    </main>
  );
}
