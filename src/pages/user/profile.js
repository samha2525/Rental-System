import UserNavbar from "@/components/layout/UserNavbar";

export default function UserProfile() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <UserNavbar />

      {/* Profile Content */}
      <section className="p-8">
        <h1 className="mb-6 text-2xl font-bold">My Profile</h1>

        <div className="space-y-4 rounded-lg bg-gray-900 p-6 shadow-lg">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Phone:</strong> +123 456 789</p>
          <p><strong>Role:</strong> User</p>
        </div>
      </section>
    </main>
  );
}
