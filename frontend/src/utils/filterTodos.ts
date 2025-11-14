import { Todo } from "../types/todo";

type FilterType = 'all' | 'completed' | 'active';

export const filterTodos = (todoList: Todo[], filter: FilterType): Todo[] => {
  switch (filter) {
    case 'completed':
      return todoList.filter((todo) => todo.completed);
    case 'active':
      return todoList.filter((todo) => !todo.completed);
    default:
      return todoList;
  }
};