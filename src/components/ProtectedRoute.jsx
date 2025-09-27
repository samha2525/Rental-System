import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    } else if (role && user.role !== role) {
      router.push("/");
    }
  }, [user, role, router]);

  // Prevent flashing before redirect
  if (!user || (role && user.role !== role)) {
    return null;
  }

  return children;
}
