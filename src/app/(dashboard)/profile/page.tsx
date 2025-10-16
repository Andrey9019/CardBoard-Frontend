"use client";

import { Button } from "@/components/ui";
import LoadingWidgest from "@/components/widgets/LoadingWidgest";
import { useSession } from "@/contexts/SessionContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Profile() {
  const { session, isLoading, logout } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !session.user) {
      router.push("/sign");
    }
  }, [session.user, router, isLoading]);

  if (isLoading || !session.user) {
    return (
      <div className="flex min-h-[60vh] w-full items-center justify-center">
        <LoadingWidgest />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-semibold mb-6">Особистий кабінет</h1>

      <div className="space-y-3 text-gray-800">
        <p>
          <span className="font-medium">Ім’я:</span> {session.user.fullName}
        </p>
        <p>
          <span className="font-medium">Email:</span> {session.user.email}
        </p>
      </div>

      <div className="mt-8">
        <Button
          onClick={logout}
          variant='default'
          className="rounded-lg px-5 py-2 text-sm font-medium"
        >
          Вийти з акаунту
        </Button>
      </div>
    </div>
  );
}