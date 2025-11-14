import { ANIMATION_DELAYS } from "../constants/list";
import { Todo, UpdateTodoRequest } from "../types/todo";
import { useAnimationState } from "./useAnimationState";

export const useTodoToggle = (
	localTodos: Todo[],
	setLocalTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
	onUpdate: (id: number, updates: UpdateTodoRequest) => void,
	animationState: ReturnType<typeof useAnimationState>
) => {
	const toggleComplete = async (todo: Todo): Promise<void> => {
		const newCompletedState = !todo.completed;
		const isCompleting = newCompletedState;

		animationState.setAnimating(todo.id);

		if (isCompleting) {
			animationState.setStriking(todo.id);
			animationState.setUnchecking(null);
		} else {
			animationState.setUnchecking(todo.id);
			animationState.setStriking(null);
		}

		setTimeout(() => {
			setLocalTodos((prevTodos) =>
				prevTodos.map((t) => (t.id === todo.id ? { ...t, completed: newCompletedState } : t))
			);

			setTimeout(async () => {
				try {
					await onUpdate(todo.id, { completed: newCompletedState });
				} catch (error) {
					setLocalTodos((prevTodos) =>
						prevTodos.map((t) => (t.id === todo.id ? { ...t, completed: !newCompletedState } : t))
					);
					console.error('Error updating todo:', error);
				} finally {
					animationState.resetAnimations();
				}
			}, ANIMATION_DELAYS.COMPLETION);
		}, ANIMATION_DELAYS.INITIAL);
	};

	return { toggleComplete };
};