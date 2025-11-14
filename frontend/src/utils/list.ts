import { Todo } from "../types/todo";

export const safeTodoArray = (todos: Todo[]): Todo[] => {
  return Array.isArray(todos) ? todos : [];
};

export const getCompletedCount = (todos: Todo[]): number => {
  return todos.filter((t) => t.completed).length;
};