/**
 * Convert server timestamp to relative time in Indonesian
 * @param serverDateString ISO string from server
 * @returns Relative time string in Indonesian
 */
export function getRelativeTime(serverDateString: string): string {
	const serverDate = new Date(serverDateString);
	const now = new Date();

	const diffMs = now.getTime() - serverDate.getTime();
	const diffSeconds = Math.floor(diffMs / 1000);
	const diffMinutes = Math.floor(diffSeconds / 60);
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);

	if (diffDays === 0) {
		if (diffHours === 0) {
			if (diffMinutes === 0) {
				return 'baru saja';
			} else if (diffMinutes === 1) {
				return '1 menit yang lalu';
			} else {
				return `${diffMinutes} menit yang lalu`;
			}
		} else if (diffHours === 1) {
			return '1 jam yang lalu';
		} else {
			return `${diffHours} jam yang lalu`;
		}
	}

	if (diffDays === 1) {
		return 'kemarin';
	}

	if (diffDays < 7) {
		return `${diffDays} hari yang lalu`;
	}

	if (diffDays < 28) {
		const weeks = Math.floor(diffDays / 7);
		if (weeks === 1) {
			return '1 minggu yang lalu';
		} else {
			return `${weeks} minggu yang lalu`;
		}
	}

	if (diffDays < 365) {
		const months = Math.floor(diffDays / 30);
		if (months === 1) {
			return '1 bulan yang lalu';
		} else {
			return `${months} bulan yang lalu`;
		}
	}

	const years = Math.floor(diffDays / 365);
	if (years === 1) {
		return '1 tahun yang lalu';
	} else {
		return `${years} tahun yang lalu`;
	}
}

/**
 * Format date for display (fallback if needed)
 * @param serverDateString ISO string from server
 * @returns Formatted date string
 */
export function formatDate(serverDateString: string): string {
	const serverDate = new Date(serverDateString);
	return serverDate.toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}