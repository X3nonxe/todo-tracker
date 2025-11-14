import { useCallback, useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { filterTodos } from "../utils/filterTodos";
import { sortTodos } from "../utils/sortTodos";

type FilterType = 'all' | 'completed' | 'active';

export const useTodoFilters = (todos: Todo[], activeFilter: FilterType) => {
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);

  const applyFilter = useCallback((todoList: Todo[], filter: FilterType) => {
    const filtered = filterTodos(todoList, filter);
    setFilteredTodos(sortTodos(filtered));
  }, []);

  useEffect(() => {
    applyFilter(todos, activeFilter);
  }, [todos, activeFilter, applyFilter]);

  return { filteredTodos, applyFilter };
};