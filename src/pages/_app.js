import { useRouter } from "next/router";
import "@/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { AuthProvider } from "@/context/AuthContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Define routes where header/footer should NOT appear
  const hideLayout =
    router.pathname.startsWith("/admin") || router.pathname.startsWith("/user");

  return (
    <AuthProvider>
      {!hideLayout && <Header />}
      <Component {...pageProps} />
      {!hideLayout && <Footer />}
    </AuthProvider>
  );
}

export default MyApp;
