"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

import { cn } from "@/shared/lib/utils";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:ring-ring/50 mb-4 flex w-full items-center justify-between gap-x-2 text-left transition-all hover:underline focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <span className="flex-1">{children}</span>
        <svg
          className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M28.856 11.798l-11.636 10.343c-0.488 0.429-1.219 0.429-1.707 0l-11.636-10.343c-0.499-0.479-0.532-1.267-0.075-1.787s1.243-0.587 1.782-0.153l10.783 9.581 10.783-9.581c0.343-0.329 0.839-0.444 1.291-0.298s0.789 0.528 0.876 0.995c0.087 0.467-0.090 0.945-0.46 1.243z" />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionTriggerFilter({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header>
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group focus-visible:ring-ring/50 flex w-full items-center justify-between gap-x-2 text-left transition-all hover:underline focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        {...props}
      >
        <svg
          className="h-5 w-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M28.856 11.798l-11.636 10.343c-0.488 0.429-1.219 0.429-1.707 0l-11.636-10.343c-0.499-0.479-0.532-1.267-0.075-1.787s1.243-0.587 1.782-0.153l10.783 9.581 10.783-9.581c0.343-0.329 0.839-0.444 1.291-0.298s0.789 0.528 0.876 0.995c0.087 0.467-0.090 0.945-0.46 1.243z" />
        </svg>
        <span className="flex-1">{children}</span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionTriggerFilter,
};
