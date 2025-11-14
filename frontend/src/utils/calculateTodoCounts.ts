import { TodoCounts } from "../types/status";
import { Todo } from "../types/todo";

export const calculateTodoCounts = (todos: Todo[]): TodoCounts => {
  const completed = todos.filter((todo) => todo.completed).length;
  const active = todos.filter((todo) => !todo.completed).length;
  
  return {
    total: todos.length,
    completed,
    active,
  };
};