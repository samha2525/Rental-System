import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold mb-6"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            EasyDrive
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 leading-relaxed"
        >
          EasyDrive was founded with a bold vision: to make premium car rentals
          as easy and seamless as booking a flight. With cutting-edge technology,
          trusted vehicles, and a customer-first approach, we deliver freedom on
          wheels to thousands of drivers across the region.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="px-6 py-16 bg-gray-900/50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To empower people with access to reliable, luxurious, and affordable
              transportation — anytime, anywhere. We aim to bridge convenience and
              trust, making every journey smooth, safe, and unforgettable.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-fuchsia-400">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              To become the most trusted car rental platform globally — where
              innovation, sustainability, and customer delight drive every mile.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work / Highlights */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose EasyDrive?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          <HighlightCard title="Seamless Booking" desc="Book cars in minutes with real-time availability and instant confirmation." />
          <HighlightCard title="Luxury Fleet" desc="From SUVs to premium sedans — drive only the best, fully maintained cars." />
          <HighlightCard title="24/7 Assistance" desc="Roadside help, insurance, and support — we’re here for you anytime." />
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-gray-900/60">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          <StatCard value="15k+" label="Happy Customers" />
          <StatCard value="150+" label="Cities Covered" />
          <StatCard value="4.9★" label="Average Rating" />
        </div>
      </section>

      {/* Team (Optional) */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <TeamCard name="Muhammad Ali" role="Founder & CEO" />
          <TeamCard name="Sarah Khan" role="Head of Operations" />
          <TeamCard name="David Lee" role="CTO" />
        </div>
      </section>

      {/* Call To Action */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
            Drive Easy
          </span>
          ?
        </h2>
        <p className="text-gray-300 mb-8">
          Book your next ride with EasyDrive and experience the future of car rentals.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          href="/cars"
          className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:opacity-90"
        >
          Explore Cars
        </motion.a>
      </section>
    </main>
  );
}

function HighlightCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl border border-white/10 bg-gray-900 p-8 shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-xl bg-gray-800 p-8 shadow-lg">
      <h3 className="text-3xl font-bold text-blue-400">{value}</h3>
      <p className="text-gray-400 mt-2">{label}</p>
    </div>
  );
}

function TeamCard({ name, role }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="rounded-2xl border border-white/10 bg-gray-900 p-8 shadow-lg text-center"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-400 to-fuchsia-400 mx-auto mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-400 text-sm">{role}</p>
    </motion.div>
  );
}
