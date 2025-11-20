"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: number;
  email: string;
  fullName: string;
}

interface SessionContextType {
  session: { user: User | null; token: string | null };
  isLoading: boolean;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const SessionContext = createContext<SessionContextType | null>(null);

interface SessionProviderProps {
  children: React.ReactNode;
}

export const SessionProvider = ({ children }: SessionProviderProps) => {
  const [session, setSession] = useState<{
    user: User | null;
    token: string | null;
  }>({ user: null, token: null });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

//   useEffect(() => {
//     const checkAuth = async () => {
//       const token = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("auth-token="))
//         ?.split("=")[1];

//       if (!token) {
//         setIsLoading(false);
//         return;
//       }
//         try {
//           const response = await fetch("/api/auth/verify", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({token}),
//             credentials: "include",
//           });
//           if (response.ok) {
//             const data= await response.json();
//         if (data.user) {
//           setSession({ user: data.user, token: null }); 
//         }
//           } 
//         } catch (error) {
// console.error("Session check failed:", error);
//         } finally {
//           setIsLoading(false);
//         }
//     };

//     checkAuth();
//   }, []);

useEffect(() => {
  const checkAuth = async () => {
    try {
      const res = await fetch("/api/auth/verify", { credentials: "include" });
      if (res.ok) {
        const { user } = await res.json();
        setSession({ user, token: null });
      }
    } catch (error) {
      console.error("Session check failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  checkAuth();
}, []);

  const login = (user: User, 
    // token: string
  ) => {
    setSession({ user, token: null });
    setTimeout(() => router.push("/profile"), 0);
    // document.cookie = `auth-token=${token}; path=/; max-age=604800; SameSite=Strict; Secure`;
  };
  const logout = () => {
    // document.cookie = "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setSession({ user: null, token: null });
    router.push("/");
  };

  return (
    <SessionContext.Provider value={{ session, isLoading, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession must be used within a SessionProvider");
  return context;
};
