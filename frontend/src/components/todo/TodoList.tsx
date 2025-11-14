import { useAnimationState } from '@/src/hooks/useAnimationState';
import { useTodoToggle } from '@/src/hooks/useTodoToggle';
import { TodoListProps } from '@/src/types/list';
import { Todo } from '@/src/types/todo';
import { safeTodoArray } from '@/src/utils/list';
import { useEffect, useState } from 'react';
import { EmptyState } from '../EmptyState';
import { TodoItem } from './TodoItem';

export default function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {
  const [localTodos, setLocalTodos] = useState<Todo[]>([]);
  const animationState = useAnimationState();

  useEffect(() => {
    setLocalTodos(todos);
  }, [todos]);

  const { toggleComplete } = useTodoToggle(localTodos, setLocalTodos, onUpdate, animationState);

  const safeTodos = safeTodoArray(localTodos);

  if (safeTodos.length === 0) {
    return <EmptyState hasOriginalTodos={todos.length > 0} />;
  }

  return (
    <div className="space-y-4">
      <div className="space-y-3">
        {safeTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isAnimating={animationState.animatingId === todo.id}
            isStriking={animationState.strikeAnimationId === todo.id}
            isUnchecking={animationState.uncheckAnimationId === todo.id}
            onToggle={() => toggleComplete(todo)}
            onDelete={() => onDelete(todo.id)}
          />
        ))}
      </div>
    </div>
  );
}
