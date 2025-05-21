import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import PolicyTabs from "../../components/Policy/PolicyTabs";

export default function PolicyPage() {
  return (
    <section className="px-9 pt-12">
      <Breadcrumb className="mb-12 hidden md:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary" href="/">
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-home"></use>
              </svg>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <svg className="h-6 w-6">
            <use href="/sprite.svg#icon-arrow-right-purple"></use>
          </svg>
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-bold">
              Правова політика
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <PolicyTabs />
    </section>
  );
}
