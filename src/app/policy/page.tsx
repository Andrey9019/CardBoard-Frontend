import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import PolicyTabs from "../components/Policy/PolicyTabs";

export default function PolicyPage() {
  return (
    <section className="px-9 pt-12">
      <Breadcrumb className="mb-12 hidden md:block">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary" href="/">
              <IoHomeOutline />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <IoIosArrowForward className="text-primary" />
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
