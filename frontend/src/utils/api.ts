import { ApiResponse } from '../types/todo';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function api<T>(
	endpoint: string,
	options?: RequestInit
): Promise<T> {
	const url = `${API_URL}${endpoint}`;

	const response = await fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			...options?.headers,
		},
		...options,
	});

	if (!response.ok) {
		const errorText = await response.text();

		let errorData;
		try {
			errorData = JSON.parse(errorText);
		} catch {
			errorData = { error: errorText || `HTTP error! status: ${response.status}` };
		}

		throw new Error(
			errorData.error || errorData.message || `HTTP error! status: ${response.status}`
		);
	}

	if (response.status === 204) {
		return null as T;
	}

	const responseText = await response.text();

	let result;
	try {
		result = JSON.parse(responseText);
	} catch (error) {
		throw new Error('Invalid JSON response from server');
	}

	if (result.success === undefined) {
		return result as T;
	}

	if (!result.success) {
		throw new Error(result.message || result.error || 'API request failed');
	}

	return result.data;
}