import { FilterOption, TodoCounts } from "../types/status";
import { AllTasksIcon } from "../components/icons/AllTasksIcon";
import { CompletedIcon } from "../components/icons/CompletedIcon";
import { ActiveIcon } from "../components/icons/ActiveIcon";

export const useFilterOptions = (counts: TodoCounts): FilterOption[] => {
	return [
		{
			key: 'all',
			label: 'Semua Task',
			count: counts.total,
			icon: <AllTasksIcon />,
		},
		{
			key: 'completed',
			label: 'Selesai',
			count: counts.completed,
			icon: <CompletedIcon />,
		},
		{
			key: 'active',
			label: 'Aktif',
			count: counts.active,
			icon: <ActiveIcon />,
		},
	];
};