import { Todo, UpdateTodoRequest } from "./todo";

export interface TodoListProps {
  todos: Todo[];
  onUpdate: (id: number, updates: UpdateTodoRequest) => void;
  onDelete: (id: number) => void;
}

export interface AnimationState {
  animatingId: number | null;
  strikeAnimationId: number | null;
  uncheckAnimationId: number | null;
}