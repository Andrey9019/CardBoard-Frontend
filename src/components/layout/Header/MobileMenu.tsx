import { useRef } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "../Logo";
import Link from "next/link";
import type { Category } from "@/shared/types/allCategories";
// import { useCategories } from "@/shared/hooks/useCategories";

interface MobileMenuProps {
	onClose: () => void;
	toggleSearch: () => void;
	isMobileMenuOpen: boolean;
	closeAll: () => void;
	categories: Category[];
}

export default function MobileMenu({
	onClose,
	toggleSearch,
	closeAll,
	categories,
}: MobileMenuProps) {
	const containerRef = useRef<HTMLDivElement>(null);

	// const { data: categories = [], isLoading, error } = useCategories();

	return (
		<div
			ref={containerRef}
			className="bg-primary custom-scroll animate-fade-in-rigth-03 text-secondary fixed top-0 left-0 z-999 flex h-full w-full flex-col justify-between overflow-y-auto shadow-xl"
		>
			<div className="container flex items-center justify-between px-9 py-6">
				<Logo size="small" className="w-24" />

				<div className="flex">
					<ul className="flex gap-2">
						{/* пошук */}
						<li className={`p-2 transition-all duration-300`}>
							<button onClick={toggleSearch} className="flex">
								<svg className="h-8 w-8">
									<use href="/icon/sprite.svg#icon-search"></use>
								</svg>
							</button>
						</li>
						{/* кошик */}
						<li className="p-2">
							<Link href="/cart" onClick={closeAll} className="relative">
								<svg className="h-8 w-8 cursor-pointer">
									<use href="/icon/sprite.svg#icon-cart"></use>
								</svg>
							</Link>
						</li>
						{/* користувач */}
						{/* <li className="hidden p-2 lg:flex">
              <svg className="h-8 w-8">
                <use href="/icon/sprite.svg#icon-person"></use>
              </svg>
            </li> */}
					</ul>

					<button onClick={onClose} className="ml-2 p-2">
						<svg className="h-8 w-8" fill="currentColor">
							<use href="/icon/sprite.svg#icon-close-black"></use>
						</svg>
					</button>
				</div>
			</div>

			<div className="flex-1 px-9">
				<p className="pb-9 text-2xl font-bold">Каталог</p>
				<Accordion type="single" collapsible>
					{categories.map((category) => (
						<AccordionItem
							key={category.name}
							value={category.name}
							className="mb-9 max-w-max font-semibold"
						>
							<AccordionTrigger>{category.display_name}</AccordionTrigger>
							<AccordionContent>
								<ul>
									{category.values.map((value) => (
										<li key={value.id} className="py-1.5 text-base">
											<Link
												href={`/catalog?${category.name}=${value.id}`}
												onClick={onClose}
												className="pb-1 hover:border-b-1"
											>
												{value.name}
											</Link>
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
				<div className="before:bg-secondary relative w-full pb-9 before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>
				<Link
					href={"/exchange-return"}
					className="font-semibold"
					onClick={onClose}
				>
					Обмін і повернення
				</Link>
			</div>

			<div className="flex flex-col gap-9 px-9 pt-9 pb-12">
				<Link href="/contacts" className="max-w-max">
					<span className="font-semibold">Особистий кабінет</span>
				</Link>

				<div className="before:bg-secondary relative before:absolute before:top-0 before:left-0 before:h-[1px] before:w-full"></div>

				<Link href="/contacts" className="max-w-max">
					<span className="font-semibold"> Звʼязатися з нами</span>
				</Link>
			</div>
		</div>
	);
}
