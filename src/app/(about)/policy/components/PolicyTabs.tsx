"use client";

import { useState } from "react";
import type { TabType } from "@/shared/types/policyTabs";

import SideBar from "./SideBar";
import PolicyMobile from "./PolicyMobile";
import PolicyConfidentContent from "./Content/PolicyConfidentContent";
import PolicyCookiesContent from "./Content/PolicyCookiesContent";
import UseTermsContent from "./Content/UseTermsContent";
import ArrowBack from "./ArrowBack";

export default function PolicyTabs() {
	const [activeTab, setActiveTab] = useState<TabType>("policy-confident");
	const [isMobilePage, setMobilePage] = useState(true);

	const titles: { [key in TabType]: string } = {
		"policy-confident": "Положення про обробку персональних даних",
		"policy-cookies": "Політика куків",
		"use-terms": "Умови використання",
	};

	const getTabClass = (tabName: TabType) =>
		`cursor-pointer transition-transform duration-200 hover:scale-105 hover:text-[16px] ${
			activeTab === tabName
				? "font-bold lg:text-[16px] md:text-[14px]"
				: "lg:text-[14px] md:text-[13px]"
		}`;

	return (
		<>
			<ArrowBack setMobilePage={setMobilePage} isMobilePage={isMobilePage} />

			<h2 className="text-[24px] font-bold lg:text-3xl">
				{isMobilePage
					? "Положення про обробку персональних даних"
					: titles[activeTab]}
			</h2>

			<div className="flex gap-[16px] md:mt-16 md:mb-16 lg:gap-[40px]">
				<SideBar setActiveTab={setActiveTab} getTabClass={getTabClass} />

				<div className="block md:w-[594px] md:text-[16px] lg:w-[790px] lg:text-[18px]">
					{activeTab === "policy-confident" && (
						<PolicyConfidentContent isMobilePage={isMobilePage} />
					)}
					{activeTab === "policy-cookies" && (
						<PolicyCookiesContent isMobilePage={isMobilePage} />
					)}
					{activeTab === "use-terms" && (
						<UseTermsContent isMobilePage={isMobilePage} />
					)}
				</div>
			</div>

			<PolicyMobile
				setActiveTab={setActiveTab}
				isMobilePage={isMobilePage}
				setMobilePage={setMobilePage}
			/>
		</>
	);
}
