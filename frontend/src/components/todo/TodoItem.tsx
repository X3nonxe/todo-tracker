import { Todo } from '../../types/todo';
import { CheckboxButton } from '../button/CheckboxButton';
import { DeleteButton } from '../button/DeleteButton';
import { TodoDescription } from './TodoDescription';
import { TodoMetadata } from './TodoMetadata';
import { TodoTitle } from './TodoTitle';

export const TodoItem = ({ todo, isAnimating, isStriking, isUnchecking, onToggle, onDelete }: { todo: Todo; isAnimating: boolean; isStriking: boolean; isUnchecking: boolean; onToggle: () => void; onDelete: () => void }) => (
  <div
    className={`
      white-card rounded-xl p-4 transition-all duration-150 group
      border-l-4 ${todo.completed ? 'border-l-gray-400' : 'border-l-pink-500'}
      ${isAnimating ? 'transform scale-[1.02] bg-pink-50' : ''}
      hover:shadow-md
    `}
  >
    <div className="flex items-start justify-between">
      <div className="flex items-start space-x-3 flex-1 min-w-0">
        <CheckboxButton completed={todo.completed} isUnchecking={isUnchecking} onClick={onToggle} />

        <div className="flex-1 min-w-0">
          <TodoTitle title={todo.title} completed={todo.completed} isUnchecking={isUnchecking} strikeAnimationId={isStriking} uncheckAnimationId={isUnchecking} />
          <TodoDescription description={todo.description} completed={todo.completed} />
          <TodoMetadata createdAt={todo.createdAt} />
        </div>
      </div>

      <div className={`flex items-center space-x-2 ml-4 shrink-0 transition-all duration-150 ${todo.completed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>{todo.completed && <DeleteButton onClick={onDelete} />}</div>
    </div>
  </div>
);
