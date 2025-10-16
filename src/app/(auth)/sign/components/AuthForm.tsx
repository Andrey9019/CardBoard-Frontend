"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { getFormFields } from "@/shared/types/authForm";
import { signupSchema, signinSchema, SignupFormData, SigninFormData } from "@/shared/lib/authSchema";
import Button from "@/components/ui/Button";
import { cn } from "@/shared/lib/utils";

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
      <form
        onSubmit={handleSubmit(onSubmit)}    className="space-y-6" >
        {fields.map((field) => (
          <div key={field.name}    className="flex flex-col"
          >
            <label
              htmlFor={field.name}
              className="mb-2 text-sm font-medium text-gray-600"
            >
              {field.label}
            </label>

            <input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...methods.register(field.name as keyof FormData)}
              className={cn(
                "rounded-xl border border-secondary px-4 py-3 text-sm placeholder-gray-500 focus:outline-none transition-all"
              )}
            />

            {errors[field.name as keyof FormData] && (
              <p className="mt-1 text-xs text-red-400" 
              >
                {String(errors[field.name as keyof FormData]?.message)}
              </p>
            )}
          </div>
        ))}
        <Button
						className="min-w-full"

          type="submit"
          variant="primary"
          text={formType === "signup" ? "Зареєструватися" : "Увійти"}>
        </Button>
      </form>
    </FormProvider>
  );
}

