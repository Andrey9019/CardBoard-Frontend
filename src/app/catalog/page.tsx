import AllGameList from "@/app/components/Catalog/AllGameList";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";

import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { TbSortDescending } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";

export default function Catalog() {
  return (
    <section className="px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
      <Breadcrumb className="mb-12">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-primary" href="/">
              <IoHomeOutline />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <IoIosArrowForward className="text-primary" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary font-bold">
              Каталог
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex flex-col items-center gap-12">
        <p className="text-3xl font-bold">Каталог</p>
        {/* виводиться те ж чого перейшли, якщо перейшли з акцій вбо популярне відображати акції або популярне */}
        <div className="text-primary flex w-full justify-between">
          <VscSettings className="h-8 w-8" />
          <TbSortDescending className="h-8 w-8" />
        </div>
        <AllGameList />
        <div>pagination</div>
      </div>
    </section>
  );
}
