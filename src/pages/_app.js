import "@/globals.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from "@/context/AuthContext";  // ✅ import provider

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>   {/* ✅ wrap the app with AuthProvider */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </AuthProvider>
  );
}

export default MyApp;
