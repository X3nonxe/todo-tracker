import { Todo } from "../types/todo";

export const sortTodos = (todoList: Todo[]): Todo[] => {
	return [...todoList].sort((a, b) => {
		if (a.completed === b.completed) {
			return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
		}
		return a.completed ? 1 : -1;
	});
};