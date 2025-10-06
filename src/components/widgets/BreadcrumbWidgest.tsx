import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
} from "@/components/ui/index";

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
							<svg width="18" height="18">
								<use href="/icon/sprite.svg#icon-home"></use>
							</svg>
						</BreadcrumbLink>
					</BreadcrumbItem>
					<svg className="h-4 w-4">
						<use href="/icon/sprite.svg#icon-arrow-right-purple"></use>
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
							<BreadcrumbItem>
								<svg className="h-4 w-4">
									<use href="/icon/sprite.svg#icon-arrow-right-purple"></use>
								</svg>
								<BreadcrumbPage className="text-primary">
									{text2}
								</BreadcrumbPage>
							</BreadcrumbItem>
						</>
					) : (
						<BreadcrumbItem>
							<BreadcrumbPage className="text-primary">{text1}</BreadcrumbPage>
						</BreadcrumbItem>
					)}
				</BreadcrumbList>
			</Breadcrumb>
		</section>
	);
}
