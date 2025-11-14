import { useState, useEffect } from "react";
import { useTodoApi } from "@/src/hooks/useTodoApi";
import { useTodoFilters } from "@/src/hooks/useTodoFilters";
import { UpdateTodoRequest } from "@/src/types/todo";

type FilterType = 'all' | 'completed' | 'active';

export const useTodoHandlers = () => {
	const [activeFilter, setActiveFilter] = useState<FilterType>("all");

	const {
		todos,
		loading,
		error,
		setError,
		fetchTodos,
		addTodo,
		updateTodo,
		deleteTodo,
	} = useTodoApi();

	const { filteredTodos, applyFilter } = useTodoFilters(todos, activeFilter);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	const handleFilterChange = (filter: FilterType) => {
		setActiveFilter(filter);
	};

	const handleUpdateTodo = (id: number, updates: UpdateTodoRequest) => {
		updateTodo(id, updates, activeFilter, applyFilter);
	};

	return {
		todos,
		filteredTodos,
		loading,
		error,
		setError,
		activeFilter,

		handleFilterChange,
		handleUpdateTodo,
		addTodo,
		deleteTodo,
	};
};
