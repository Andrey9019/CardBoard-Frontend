"use client";

import AuthForm from "@/app/(auth)/sign/components/AuthForm";
import { useState } from "react";
import { useAuthSubmit } from "@/shared/hooks/useAuthSubmit";
import { cn } from "@/shared/lib/utils";

export default function AuthBody() {
  const [formType, setFormType] = useState<"signin" | "signup">("signup");
  const mutation = useAuthSubmit(formType);

  const handleSubmit = (data: any) => {
    mutation.mutate(data);
    console.log("Form data:", data, "Type:", formType);
  };

  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-200">
        {/* Вкладки */}
        <div className="flex justify-center mb-8 bg-gray-100 rounded-xl p-1">
          {["signin", "signup"].map((type) => (
            <button
              key={type}
              onClick={() => setFormType(type as "signin" | "signup")}
              className={cn(
                "w-1/2 py-2 text-lg font-medium rounded-lg transition-all duration-200",
                formType === type
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-50"
              )}
            >
              {type === "signin" ? "Увійти" : "Реєстрація"}
            </button>
          ))}
        </div>

        {/* Форма */}
        <AuthForm formType={formType} onSubmit={handleSubmit} />
      </div>
    </section>
  );
}