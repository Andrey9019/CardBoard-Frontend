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

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("auth-token");
      console.log("token", token);

      if (token) {
        try {
          const response = await fetch("/api/auth/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }),
          });

          const data = await response.json();
          console.log("verify res", data);

          if (data.user) {
            setSession({ user: data.user, token });
          } else {
            localStorage.removeItem("auth-token");
          }
        } catch (error) {
          console.error("Token verify error:", error);
          localStorage.removeItem("auth-token");
        }
      }

      setIsLoading(false);
    };

    checkAuth();
  }, []);
  // тут треба оформити на cookie
  const login = (user: User, token: string) => {
    console.log("login called with:", { user, token });
    localStorage.setItem("auth-token", token);
    document.cookie = `auth-token=${token}; path=/; max-age=604800; SameSite=Strict; Secure`;
    setSession({ user, token });
    setTimeout(() => router.push("/profile"), 0);
  };
  const logout = () => {
    localStorage.removeItem("auth-token");
    document.cookie =
      "auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
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
