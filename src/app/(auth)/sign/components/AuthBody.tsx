"use client";

import AuthForm from "@/app/(auth)/sign/components/AuthForm";
import { useState } from "react";
import { useAuthSubmit } from "@/shared/hooks/useAuthSubmit";

export default function AuthBody() {
  const [formType, setFormType] = useState<"signin" | "signup">("signup");
  const mutation = useAuthSubmit(formType); // Передаємо formType в хук

  const handleSubmit = (data: any) => {
    mutation.mutate(data);
    console.log("Form data:", data, "Type:", formType);
  };

  return (
    <section className="mb-12 flex flex-col items-center gap-12 px-9 lg:gap-16 lg:px-8 xl:px-[120px]">
      <div>
        <button onClick={() => setFormType("signin")}>Login</button>
        <button onClick={() => setFormType("signup")}>Register</button>
      </div>
      <AuthForm formType={formType} onSubmit={handleSubmit} />
    </section>
  );
}
