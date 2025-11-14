import { FilterOption } from "@/src/types/status";
import { FilterIcon } from "./FilterIcon";
import { FilterLabel } from "./FilterLabel";
import { FilterBadge } from "./FilterBadge";

export const FilterButton = ({ option, isActive, onClick }: { option: FilterOption; isActive: boolean; onClick: () => void }) => (
  <button onClick={onClick} className={`w-full text-left transition-all duration-200 font-medium group ${isActive ? 'text-pink-500 font-semibold' : 'text-black hover:text-gray-700'}`}>
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <FilterIcon icon={option.icon} isActive={isActive} />
        <FilterLabel label={option.label} isActive={isActive} />
      </div>
      <FilterBadge count={option.count} isActive={isActive} />
    </div>
  </button>
);
