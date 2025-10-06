import BreadcrumbWidgest from "@/components/widgets/BreadcrumbWidgest";
import PolicyTabs from "./components/PolicyTabs";

export default function PolicyPage() {
	return (
		<>
			<BreadcrumbWidgest text1="Правова політика" />
			<section className="px-9 pt-12 lg:px-8 lg:pt-16 xl:px-[120px]">
				<PolicyTabs />
			</section>
		</>
	);
}
