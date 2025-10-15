// import AuthForm from "@/components/layout/Form/AuthForm";



// export default function RegisterBody() {
//     return(
// 		<section className="mb-12 flex flex-col items-center gap-12 px-9 lg:gap-16 lg:px-8 xl:px-[120px]">
//    <AuthForm formType="register" />
//             </section>
//     )
// }


"use client";

import AuthForm from "";
import { useState } from "react";

export default function LoginPage() {
  const [formType, setFormType] = useState<"login" | "register">("register");

  const handleSubmit = (data: any) => {
    console.log("Form data:", data, "Type:", formType);
  };

  return (
		<section className="mb-12 flex flex-col items-center gap-12 px-9 lg:gap-16 lg:px-8 xl:px-[120px]">
      <button onClick={() => setFormType("login")}>Login</button>
      <button onClick={() => setFormType("register")}>Register</button>
      <AuthForm formType={formType} onSubmit={handleSubmit} />
             </section>

  );
}