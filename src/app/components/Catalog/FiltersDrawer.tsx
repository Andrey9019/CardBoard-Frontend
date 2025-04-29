import Button from "@/components/ui/Button";
import { IoCloseOutline } from "react-icons/io5";

interface FiltersDrawerProps {
  toggleFilter: () => void;
}

export default function FiltersDrawer({ toggleFilter }: FiltersDrawerProps) {
  return (
    <div className="mb-8 rounded-lg bg-white">
      <div className="flex items-center p-6">
        <p>Фільтр</p>
        <button onClick={toggleFilter} className="ml-2 p-2">
          <IoCloseOutline className="h-8 w-8" />
        </button>
      </div>
      <div></div>
      <Button type="primary" text="Застосувати" />
    </div>
  );
}
