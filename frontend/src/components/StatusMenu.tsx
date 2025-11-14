import { useFilterOptions } from "../hooks/useFilterOptions";
import { StatusMenuProps } from "../types/status";
import { calculateTodoCounts } from "../utils/calculateTodoCounts";
import { FilterButton } from "./filter/FilterButton";

export default function StatusMenu({ todos, activeFilter, onFilterChange }: StatusMenuProps) {
  const counts = calculateTodoCounts(todos);
  const filterOptions = useFilterOptions(counts);

  return (
    <div className="space-y-4">
      {filterOptions.map((option) => (
        <FilterButton key={option.key} option={option} isActive={activeFilter === option.key} onClick={() => onFilterChange(option.key)} />
      ))}
    </div>
  );
}
