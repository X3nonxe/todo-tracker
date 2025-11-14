import { useCallback, useState } from "react";
import { CreateTodoRequest, Todo, UpdateTodoRequest } from "../types/todo";
import { api } from "../utils/api";
import { getErrorMessage } from "../utils/getErrorMessage";
import { ERROR_MESSAGES, UPDATE_DELAY } from "../constants/tracking";

type FilterType = 'all' | 'completed' | 'active';

export const useTodoApi = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>('');

	const fetchTodos = useCallback(async (): Promise<void> => {
		try {
			setError('');
			const data = await api<Todo[]>('/todos');
			setTodos(data);
		} catch (err) {
			const errorMessage = getErrorMessage(err, ERROR_MESSAGES.LOAD);
			setError(errorMessage);
			setTodos([]);
		} finally {
			setLoading(false);
		}
	}, []);

	const addTodo = useCallback(async (todo: CreateTodoRequest): Promise<void> => {
		try {
			await api<Todo>('/todos', {
				method: 'POST',
				body: JSON.stringify(todo),
			});
			await fetchTodos();
		} catch (err) {
			setError(getErrorMessage(err, ERROR_MESSAGES.ADD));
		}
	}, [fetchTodos]);

	const updateTodo = useCallback(
		async (id: number, updates: UpdateTodoRequest, activeFilter: FilterType, applyFilter: (todoList: Todo[], filter: FilterType) => void): Promise<void> => {
			try {
				await api<Todo>(`/todos/${id}`, {
					method: 'PUT',
					body: JSON.stringify(updates),
				});

				setTimeout(() => {
					setTodos((prevTodos) => {
						const updatedTodos = prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updates } : todo));
						applyFilter(updatedTodos, activeFilter);
						return updatedTodos;
					});
				}, UPDATE_DELAY);
			} catch (err) {
				setError(getErrorMessage(err, ERROR_MESSAGES.UPDATE));
				await fetchTodos();
			}
		},
		[fetchTodos]
	);

	const deleteTodo = useCallback(
		async (id: number): Promise<void> => {
			try {
				await api(`/todos/${id}`, {
					method: 'DELETE',
				});
				await fetchTodos();
			} catch (err) {
				setError(getErrorMessage(err, ERROR_MESSAGES.DELETE));
			}
		},
		[fetchTodos]
	);

	return {
		todos,
		loading,
		error,
		setError,
		fetchTodos,
		addTodo,
		updateTodo,
		deleteTodo,
	};
};