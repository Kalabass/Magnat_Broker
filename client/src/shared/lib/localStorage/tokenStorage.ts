export function getTokenFromLocalStorage(): string {
	const data = localStorage.getItem('token');
	const token = data ? JSON.parse(data) : '';

	return token;
}

export function setTokenToLocalStorage(token: string): void {
	if (localStorage.getItem('token')) {
		localStorage.removeItem('token');
	}

	localStorage.setItem('token', JSON.stringify(token));
}

export function removeTokenFromLocalStorage(): void {
	localStorage.removeItem('token');
}
