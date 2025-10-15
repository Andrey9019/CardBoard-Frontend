"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getFormFields } from "@/shared/types/authForm";
import { signupSchema, signinSchema, SignupFormData, SigninFormData } from "@/shared/lib/authSchema";
import { Button } from "@/components/ui";

interface AuthFormProps {
  formType: "signup" | "signin";
  onSubmit: (data: SignupFormData | SigninFormData) => void;
}

type FormData = SignupFormData | SigninFormData;

export default function AuthForm({ formType, onSubmit }: AuthFormProps) {
  const fields = getFormFields(formType);
  const schema = formType === "signup" ? signupSchema : signinSchema;
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {} as FormData,
  });
  const { handleSubmit, formState: { errors } } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...methods.register(field.name as keyof FormData)}
              className=""
            />
            {errors[field.name as keyof FormData] && (
              <p className=''>
                {String(errors[field.name as keyof FormData]?.message)}
              </p>
            )}
          </div>
        ))}
        <Button type="submit"  className="">
          {formType === "signup" ? "Зареєструватися" : "Увійти"}
        </Button>
      </form>
    </FormProvider>
  );
}