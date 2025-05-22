import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";


export default function BreadcrumbWidgest({
  text1,
  text2,
  link,
}: {
  text1: string;
  text2?: string;
  link?: string;
}) {
  return (
    <section className="mb-12 px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
      <Breadcrumb className="mb-12 xl:mb-16">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/" className="text-primary font-bold">
              <svg width="24" height="24">
                <use href="/sprite.svg#icon-home"></use>
              </svg>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <svg className="h-6 w-6">
            <use href="/sprite.svg#icon-arrow-right-purple"></use>
          </svg>
          {text2 ? (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href={link || "/"}
                  className="text-primary font-bold"
                >
                  {text1}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <svg className="h-6 w-6">
                <use href="/sprite.svg#icon-arrow-right-purple"></use>
              </svg>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-primary">
                  {text2}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          ) : (
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary font-bold">
                {text1}
              </BreadcrumbPage>
            </BreadcrumbItem>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </section>
  );
}
