'use client';

import { useState, useEffect } from 'react';
import { Todo, UpdateTodoRequest } from '../types/todo';
import { getRelativeTime } from '../utils/dateUtils';

interface TodoListProps {
	todos: Todo[];
	onUpdate: (id: number, updates: UpdateTodoRequest) => void;
	onDelete: (id: number) => void;
}

export default function TodoList({ todos, onUpdate, onDelete }: TodoListProps) {
	const [localTodos, setLocalTodos] = useState<Todo[]>([]);
	const [animatingId, setAnimatingId] = useState<number | null>(null);
	const [strikeAnimationId, setStrikeAnimationId] = useState<number | null>(null);
	const [uncheckAnimationId, setUncheckAnimationId] = useState<number | null>(null);

	useEffect(() => {
		setLocalTodos(todos);
	}, [todos]);

	const toggleComplete = async (todo: Todo): Promise<void> => {
		const newCompletedState = !todo.completed;
		const isCompleting = newCompletedState;

		setAnimatingId(todo.id);

		if (isCompleting) {
			setStrikeAnimationId(todo.id);
			setUncheckAnimationId(null);
		} else {
			setUncheckAnimationId(todo.id);
			setStrikeAnimationId(null);
		}

		setTimeout(() => {
			setLocalTodos((prevTodos) => prevTodos.map((t) => (t.id === todo.id ? { ...t, completed: newCompletedState } : t)));

			const animationDuration = 500;

			setTimeout(async () => {
				try {
					await onUpdate(todo.id, { completed: newCompletedState });
				} catch (error) {
					setLocalTodos((prevTodos) => prevTodos.map((t) => (t.id === todo.id ? { ...t, completed: !newCompletedState } : t)));
					console.error('Error updating todo:', error);
				} finally {
					setAnimatingId(null);
					setStrikeAnimationId(null);
					setUncheckAnimationId(null);
				}
			}, animationDuration);
		}, 10);
	};

	const safeTodos = Array.isArray(localTodos) ? localTodos : [];
	const completedCount = safeTodos.filter((t) => t.completed).length;

	if (safeTodos.length === 0) {
		return (
			<div className="text-center py-8">
				<div className="text-gray-500 mb-2">
					<svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1}
							d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
						/>
					</svg>
				</div>
				<h3 className="text-lg font-medium text-gray-900 mb-1">Tidak ada tugas</h3>
				<p className="text-sm text-gray-500">{todos.length === 0 ? 'Mulai dengan membuat tugas pertama di bawah.' : 'Coba ubah pengaturan filter.'}</p>
			</div>
		);
	}

	return (
		<div className="space-y-4">
			<div className="space-y-3">
				{safeTodos.map((todo) => (
					<div
						key={todo.id}
						className={`
							white-card rounded-xl p-4 transition-all duration-150 group
							border-l-4 ${todo.completed ? 'border-l-gray-400' : 'border-l-pink-500'}
							${animatingId === todo.id ? 'transform scale-[1.02] bg-pink-50' : ''}
							hover:shadow-md
						`}
					>
						<div className="flex items-start justify-between">
							<div className="flex items-start space-x-3 flex-1 min-w-0">
								<button
									onClick={() => toggleComplete(todo)}
									className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-all duration-150 ${todo.completed ? 'bg-gray-500 border-gray-500 text-white' : 'border-gray-400 hover:border-pink-500'} ${
										uncheckAnimationId === todo.id ? 'uncheck-checkbox' : ''
									}`}
								>
									{todo.completed && (
										<svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
										</svg>
									)}
								</button>

								<div className="flex-1 min-w-0">
									<div className="relative">
										<h3 className={`font-semibold truncate relative z-20 ${todo.completed ? 'text-gray-500' : 'text-gray-900'} ${uncheckAnimationId === todo.id ? 'uncheck-text' : ''}`}>{todo.title}</h3>

										{strikeAnimationId === todo.id && (
											<div
												className="absolute top-1/2 left-0 w-0 h-[2px] transform -translate-y-1/2 z-30 strike-animation"
												style={{
													animation: 'strikeThrough 0.5s ease-in-out forwards',
												}}
											/>
										)}

										{uncheckAnimationId === todo.id && (
											<div
												className="absolute top-1/2 right-0 w-0 h-[2px] transform -translate-y-1/2 z-30 uncheck-animation"
												style={{
													animation: 'uncheckReverse 0.5s ease-in-out forwards',
												}}
											/>
										)}

										{todo.completed && strikeAnimationId !== todo.id && uncheckAnimationId !== todo.id && <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-400 transform -translate-y-1/2 z-10" />}
									</div>

									{todo.description && <p className={`text-sm mt-1 text-gray-600 ${todo.completed ? 'opacity-75' : ''}`}>{todo.description}</p>}

									<div className="flex items-center space-x-2 mt-2 text-xs text-gray-500">
										<span>Dibuat: {getRelativeTime(todo.createdAt)}</span>
									</div>
								</div>
							</div>

							<div className={`flex items-center space-x-2 ml-4 flex-shrink-0 transition-all duration-150 ${todo.completed ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
								{todo.completed && (
									<button onClick={() => onDelete(todo.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-150" title="Delete task">
										<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
										</svg>
									</button>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
