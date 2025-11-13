export interface Todo {
	id: number;
	title: string;
	description: string | null;
	completed: boolean;
	createdAt: string;
	updatedAt: string;
}

export interface CreateTodoRequest {
	title: string;
	description?: string | null;
	completed?: boolean;
}

export interface UpdateTodoRequest {
	title?: string;
	description?: string | null;
	completed?: boolean;
}

export interface ApiResponse<T> {
	success: boolean;
	data: T;
	message?: string;
	error?: string;
}

export function isTodo(obj: any): obj is Todo {
	return (
		obj &&
		typeof obj.id === 'number' &&
		typeof obj.title === 'string' &&
		(obj.description === null || typeof obj.description === 'string') &&
		typeof obj.completed === 'boolean' &&
		typeof obj.createdAt === 'string' &&
		typeof obj.updatedAt === 'string'
	);
}

export function isTodoArray(obj: any): obj is Todo[] {
	return Array.isArray(obj) && obj.every(isTodo);
}

export function isApiResponse(obj: any): obj is ApiResponse<any> {
	return (
		obj &&
		typeof obj.success === 'boolean' &&
		obj.data !== undefined
	);
}