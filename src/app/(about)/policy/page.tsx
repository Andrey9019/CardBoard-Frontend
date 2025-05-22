import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import PolicyTabs from "./components/PolicyTabs";

export default function PolicyPage() {
  return (
    <>
      <BreadcrumbWidgest text1="Правова політика" />
      <section className="px-9 pt-12">
        <PolicyTabs />
      </section>
    </>
  );
}
