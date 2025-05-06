import { TabType } from "@/app/types/policyTabs";

interface SideBarProps {
  setActiveTab: (tab: TabType) => void;
  getTabClass: (tab: TabType) => string;
}

export default function SideBar({ setActiveTab, getTabClass }: SideBarProps) {
  return (
    <aside className="hidden md:block md:w-[350px] lg:w-[370px]">
      <ul className="space-y-5">
        <li
          onClick={() => setActiveTab("policy-confident")}
          className={`${getTabClass("policy-confident")}`}
        >
          Політика конфіденційності
        </li>
        <li
          onClick={() => setActiveTab("policy-cookies")}
          className={`${getTabClass("policy-cookies")}`}
        >
          Політика куків
        </li>
        <li
          onClick={() => setActiveTab("use-terms")}
          className={`${getTabClass("use-terms")}`}
        >
          Умови використання
        </li>
      </ul>
    </aside>
  );
}
