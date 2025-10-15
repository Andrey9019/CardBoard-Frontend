"use client";

import { Button } from "@/components/ui";
import { useSession } from "@/contexts/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { session, isLoading, logout } = useSession();
  console.log("Session in profile", session);
  const router = useRouter();

  useEffect(() => {
    console.log("session", session);
    // Перевіряємо тільки після завершення завантаження
    if (!isLoading && !session.user) {
      router.push("/sign");
    }
  }, [session.user, router, isLoading]);

  // Показуємо лоадер поки перевіряється токен
  if (isLoading) {
    console.log("loader");
    return <p>Завантаження...</p>;
  }

  // Показуємо лоадер якщо немає користувача (після завершення завантаження)
  if (!session.user) {
    console.log("no user after loading");
    return <p>Перенаправлення...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Профіль</h1>
      <div className="space-y-2">
        <p className="text-lg">Ім'я: {session.user.name}</p>
        <p className="text-lg">Email: {session.user.email}</p>
      </div>
      <Button onClick={logout} variant="secondary" className="mt-4">
        Вийти
      </Button>
    </div>
  );
}
