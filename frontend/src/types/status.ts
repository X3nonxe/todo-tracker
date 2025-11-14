import { Todo } from "./todo";

export type FilterType = 'all' | 'completed' | 'active';

export interface StatusMenuProps {
  todos: Todo[];
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

export interface FilterOption {
  key: FilterType;
  label: string;
  count: number;
  icon: React.ReactNode;
}

export interface TodoCounts {
  total: number;
  completed: number;
  active: number;
}